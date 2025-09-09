lst = [1, 2, 3, 4, 5]
print("Исходный список:", lst)
print("В обратном порядке:", lst[::-1])

def list_sort(lst):
    return sorted(lst, key=abs, reverse=True)

nums = [3, -7, 2, -10, 5]
print("Исходный список:", nums)
print("Сортировка:", list_sort(nums))

def change(lst):
    lst[0], lst[-1] = lst[-1], lst[0]
    return lst

values = [10, 20, 30, 40]
print("Исходный список:", values)
print("После замены:", change(values))