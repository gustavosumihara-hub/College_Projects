tabuada=int(input('Informe um numero para saber a tabuada do mesmo: '))
for i in range(0,11,1):
    print('{} x {} {} {}'.format(i,tabuada,'=',i*tabuada))