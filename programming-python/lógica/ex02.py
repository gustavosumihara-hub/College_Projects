nome=str(input("Informe seu nome: "))
sobrenome=str(input("Informe seu sobrenome: "))
sexo=str(input("Informe seu sexo: [M]=masculino e [f]= feminino"))
if sexo=="M":
    print("Bem vindo,", nome)
elif sexo=="F":
    print("Bem vinda,", nome)
else:
    print("Bem vindo(a), {} da {}".format(nome, sobrenome))