preco=float(input("Informe o preço do produto: "))
valor_desconto=preco-((5*preco)/100)
print("O valor do produto vai de {:.2f} para {:.2f} com o disconte de 5%".format(preco,valor_desconto))