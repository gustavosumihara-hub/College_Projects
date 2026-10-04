distancia=float(input('Qual a distancia da sua viagem em km: '))
if distancia<=200:
    print("O valor da viajem será de {:.2f} Reais".format(distancia*0.5))
else:
    print("O valor da viagem será de {:.2f}reais". format(distancia*0.45))