frase=str(input('Digite uma frase ')).strip().upper()
separada=frase.split()
junto=frase.join(separada)
inverso=''
for i in range(len(junto)-1,-1,-1):
    inverso=inverso+junto[i]
if inverso==junto:
    print('{} é um palindromo pois ao contrario é {}'.format(frase, inverso))
else:
    print('{} não é um palindromo pois ao contrario é {}'.format(frase, inverso))
