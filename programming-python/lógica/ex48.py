ct=0
somador=0
for i in range(1,500,2):
    if i%3==0:
        somador=somador+i
        ct=ct+1
print('A soma de todos os {} números ímpares é igual a {}'.format(ct, somador))
