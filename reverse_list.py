
#Revert list without pre build method.

def reverse_list(list): #create a function that receives the list 
    start = 0 # initialize variables two contain the start and the end of the list
    end = len(list) -1
    while start < end: #while to change the values on the list
        list[start], list[end], = list[end], list[start] # the elements will change of position (start and end)

        start += 1 #adds one to the start element 
        end -= 1 #substract one to the end element
        #this allows to the while cycle continues advance  
    return list #returnt the list 

input_list = [1,2,3,4,5]
print(reverse_list(input_list))
