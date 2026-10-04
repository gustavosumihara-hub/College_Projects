s1=float(input('Informe o primeiro segmento: '))
s2=float(input('Informe o segundo segmento: '))
s3=float(input('Informe o terceiro segmento: '))
lista=[s1,s2,s3]
lista.sort()
if s1+s2<s3:
    print('Esses segmentos podem formar um triangulo')
    if s1==s2 and s2==s3 and s3==s1:
        print('esse é um triagulo isócelis')
    if s1==s2==s3:
        print('Esse é um triangulo equilatero')
    if s1!=s2 and s2!=s3 and s3!=s1:
        print('Esse é um triangulo escaleno')
else:
    print('Esses segmentos não formam um triangulo')