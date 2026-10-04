salrio=int(input('informe seu salario: '))
if salrio>1250:
    print("O seu novo salario será de {:.2f}".format(salrio+(salrio/10)))
else:
    print("O seu novo salario será de {:.2f} ".format(salrio+((salrio/100))*15) )