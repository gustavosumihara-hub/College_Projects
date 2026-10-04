nome=str(input("Informe seu nome completo: ")).strip()
separa_nome=nome.split()
print("Muito prazer {}! seu primeiro nome é {} e seu ultimo nome é {}".format(nome,separa_nome[0], separa_nome[nome.count(" ")]))