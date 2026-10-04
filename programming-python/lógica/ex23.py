numero=str(input("Informe um numero: ")).strip()
separa_numero=" ".join(numero).split()
if len(numero)==4:
    print("Unidade: ",(separa_numero[3]))
    print("Dezena: ", (separa_numero[2]))
    print("Centena: ",(separa_numero[1]))
    print("Milhar: ", (separa_numero[0]))
elif len(numero)==3:
    print("Unidade: ", (separa_numero[0]))
    print("Dezena: ", (separa_numero[2]))
    print("Centena: ", (separa_numero[1]))
elif len(numero)==2:
    print("Unidade: ", (separa_numero[0]))
    print("Dezena: ", (separa_numero[1]))
elif len(numero) == 1:
    print("Unidade: ", (separa_numero[0]))
else:
    print("Numero não foi informado: ")