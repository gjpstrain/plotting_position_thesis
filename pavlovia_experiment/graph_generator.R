library(tidyverse)
library(egg)
library(scales)

# create my theme
my_theme <- function() {
  theme_minimal(base_size = 12) +
    theme(panel.border = element_rect(fill = NA, size = 0.4),
          panel.grid.minor.x = element_blank(),
          panel.grid.major.x = element_blank(),
          axis.title.x = element_blank(),
          axis.text.x = element_text(size = 6, angle = 35, hjust = 1, colour = NA),
          axis.ticks.x = element_line(),
          axis.title.y = element_text(vjust = -4),
          axis.text.y = element_text(size = 8),
          aspect.ratio = 4.5/3,
          )
}
  
# read in csv with mean values for each item number
materials <- read_csv('materials.csv')

# duplicate the row for each E(xperimental) item
materials <- materials %>%
  rbind(filter(materials, type == "E")) %>%
  arrange(item_no)

# create condition column,
# for E(xperimental) items, assign condition "hi" and "lo";
# for each F(iller); (P)ractice; and (A)ttention Check item, assign condition "mid"
materials <- materials %>%
  mutate(condition = case_when(type == "E" ~ 
                                 rep_len(c("hi", "lo"), length.out = nrow(.)),
                               type == "F" | type == "P" | type == "A" ~  "mid"))

# add 0.5 to the population mean for each item in "mid" condition
# so y-axis labels are still whole numbers
# and the population mean is in the centre of the graph
# but keep items in "hi" and "lo" condition the same
materials <- materials %>%
  mutate(data_mean = case_when(condition == "mid" ~ data_mean + 0.5,
                               condition == "hi" | condition == "lo" ~ data_mean))

# create a "graphs" folder
dir.create("graphs")

# for each row in the materials dataframe
for (i in rownames(materials)){
  
  # convert i from string to integer so it can be used to index columns
  i <- strtoi(i, base = 0L)
  
  # read in variables in this row
  item_no <- materials$item_no[i]
  condition <- materials$condition[i]
  type <- materials$type[i]
  data_mean <- materials$data_mean[i]
  x_label <- materials$x_label[i]
  
  # set seed for reproducibility
  seed_number <- 100 + item_no
  set.seed(seed_number)
  
  # set the standard deviation for data generation
  data_sd <- 0.5
  
  # set upper and lower limits around the population mean of the data
  lower_lim <- case_when(condition == "lo" ~ data_mean - 1.5, 
                         condition == "hi" ~ data_mean - 8.5,
                         condition == "mid" ~ data_mean - 5)
  upper_lim <- case_when(condition == "lo" ~ data_mean + 8.5, 
                         condition == "hi" ~ data_mean + 1.5,
                         condition == "mid" ~ data_mean + 5)
  
  # generate 3 random numbers, 
  # using the population mean specified in the materials dataframe
  # and the population standard deviation specified above
  y_values <- rnorm(3, mean = data_mean, sd = data_sd)
  
  # create 3 x-axis labels,
  # using the longest word/phrase in the x_label column
  # so that plotting area does not expand/contract in graphs with different labels
  # (this will be made transparent and the real label displayed,
  # but is necessary as a placeholder)
  x_values <- paste("Neighborhood", 1:3, " ")
  
  # create df from x_values and y_values
  # set x_values as a factor,
  # and y_values as numeric
  df <- as_tibble(cbind(x_values, y_values))
  df$x_values <- as.factor(df$x_values)
  df$y_values <- as.numeric(df$y_values)
  
  # create the x_labels vector, from word/phrase in the x_label column
  x_labels <- paste(x_label, 1:3, " ")
  
  # create the plot
  g <- df %>% ggplot(aes(x = x_values,
                          y = y_values)) + 
    geom_point() + 
    geom_text(aes(x = c(1,2,3), y = lower_lim, label = x_labels), 
              angle = 35, size = 2.2, 
              hjust = 1, vjust = 2) + # adding extra text for the x_labels
    coord_cartesian(ylim = c(lower_lim, upper_lim), 
                    xlim = c(0.5, 3.5), 
                    clip = "off",
                    expand = FALSE) + # setting the limits
    ylab("Chance (%)") +
    geom_segment(aes(x = -0.4, xend = -0.4, # specifying the vertical arrow
                     y = lower_lim + 2, 
                     yend = upper_lim - 2),
                 arrow = arrow(length = unit(0.2,"cm")), colour = "black") +
    scale_y_continuous(breaks = seq(lower_lim + 1.5, # breaks where the y-axis labels will be
                                    upper_lim - 1.5, 
                                    by = 7),
                       minor_breaks = seq(lower_lim + 0.5, # minor breaks - no y-axis labels
                                          upper_lim + 0.5, 
                                          by = 1),
                       labels = percent_format(scale = 1, accuracy = 1)) + # y-axis labels
    my_theme() 
  
  # save in graphs folder
  ggsave(paste0("graphs/", type, item_no, "_", condition, ".png"), g,
         width = 5, height = 7, units = "cm", dpi = 600)
  
  # create new img column in the materials dataframe:
  # the name that the graph has been saved under
  materials$img[i] <- paste0("graphs/", type, item_no, "_", condition, ".png")
  
  # save the 3 data points in separate columns
  materials$point1[i] <- y_values[1]
  materials$point2[i] <- y_values[2]
  materials$point3[i] <- y_values[3]
}
    
# filter out on the practice items
practice <- materials %>%
  filter(type == "P")

# create csv file with practice items only
write_csv(practice, path = 'practice.csv')

# take the first 8 filler items for list 1 - slice_head()
F_list1 <- materials %>%
  filter(type == "F") %>%
  slice_head(n = 8) 

# take the last 7 filler items for list 2 - slice_tail()
F_list2 <- materials %>%
  filter(type == "F") %>%
  slice_tail(n = 7) 

# take the first 2 attention check items for list 1 - slice_head()
A_list1 <- materials %>%
  filter(type == "A") %>%
  slice_head(n = 2) 

# take the last 3 attention check items for list 2 - slice_tail()
A_list2 <- materials %>%
  filter(type == "A") %>%
  slice_tail(n = 3) 
   
# experimental items:
# arrange according data_mean (also item_no and condition)
# so each item is in order and condition repeats ("lo", "hi") pattern
# add a temporary column with numbers 1:20, repeated for each item
# for even numbers, choose "hi" condition
# for odd numbers, choose "lo" condition
E_list1 <- materials %>% 
  filter(type == "E") %>%
  arrange(data_mean, item_no, condition) %>%
  mutate(temp = rep(1:20, each = 2)) %>%
  filter(condition == case_when((temp %% 2) == 0 ~ "hi",
                                (temp %% 2) != 0 ~ "lo"))

# use anti_join to create a list that is the opposite of the one above
E_list2 <- materials %>%
  filter(type == "E") %>%
  arrange(data_mean, item_no, condition) %>%
  mutate(temp = rep(1:20, each = 2)) %>%
  anti_join(E_list1)

# remove the 'temp' column, then add fillers and attention check items
# for list 1, to complete the list
list1 <- E_list1 %>%
  select(- temp) %>%
  rbind(F_list1, A_list1)

# remove the 'temp' column, then add fillers and attention check items
# for list 2, to complete the list
list2 <- E_list2 %>%
  select(- temp) %>%
  rbind(F_list2, A_list2)

# check that there is an equal number of conditions
list1 %>% group_by(condition) %>% summarise(n())
list2 %>% group_by(condition) %>% summarise(n())

# check no items appears in the same condition in both lists
list1 %>% 
  rbind(list2) %>%
  select(item_no, condition) %>%
  unique() %>%
  nrow()

list1 %>% 
  rbind(list2) %>%
  select(img) %>%
  unique() %>%
  nrow()
# there are 60 unique rows

# write csv files for list1 and list2
write_csv(list1, path = 'list1.csv')
write_csv(list2, path = 'list2.csv')

conditionA <- as_tibble(c("list1.csv", "list2.csv")) %>% rename("list" = "value")
conditionB <- as_tibble(c("list2.csv", "list1.csv")) %>% rename("list" = "value")

write_csv(conditionA, path = 'conditionA.csv')
write_csv(conditionB, path = 'conditionB.csv')

