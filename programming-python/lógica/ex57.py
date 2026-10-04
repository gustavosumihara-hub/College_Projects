
while True:
    sexo=str(input('Informe o seu sexo: [m/f]: '))
    if sexo=='m' or sexo=='f':
        print('Sexo {} registrado com sucesso:'.format(sexo))
        break
    else:
        print('Dados invalidos')

