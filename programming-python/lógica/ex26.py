frase=str(input("Informe uma frase: ")).strip().lower()
print('A letra "A" apareceu {} vezes'.lower().format(frase.count('a')))
print("A primeira vezes que o 'A' aparece é na posição ".lower(), frase.find('a')+1)
print("A ultama vezes que o 'A' aparece é na posição ".lower(), frase.rfind('a')+1)