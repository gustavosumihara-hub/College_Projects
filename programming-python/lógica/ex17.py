
from math import sqrt

c_oposto=float(input("Informe o valor do cateto oposto: "))
c_adjacente=float(input("Informme o valor do cateto adjacente: "))
hipotenusa=sqrt((c_adjacente**2)+(c_oposto**2))
print("A hipotenusa será igual a: {:.2f}".format(hipotenusa))