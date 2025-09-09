A10 = [5, -2, 7, -8, -3, 4, -1, 9, -6, 2]
negatives = [x for x in A10 if x < 0]

if negatives:
    max_negative = max(negatives)
    print("Максимальный отрицательный элемент =", max_negative)
else:
    print("Отрицательных элементов нет")

A25 = [
    [5, -3, 7, 9, 1],
    [2, 8, -6, 4, 10]
]

max_value = A25[0][0]
max_index = (0, 0)

for i in range(len(A25)):         
    for j in range(len(A25[i])): 
        if A25[i][j] > max_value:
            max_value = A25[i][j]
            max_index = (i, j)

print("Максимальный элемент в A2,5 =", max_value)
print("Его индекс =", max_index)
