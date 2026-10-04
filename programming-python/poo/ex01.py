class Brasileirao:
    def __init__(self,nome,time,idade,salario):
        self.idade=idade
        self.nome=nome
        self.time=time
        self.salario=salario
    def get_idade(self):
        return self.idade
    def get_nome(self):
        return self.nome
    def get_time(self):
        return self.time
    def get_salario(self):
        return self.time
    def set_salario(self,novo_salario):
        self.salario=novo_salario
    def set_time(self, novo_time):
            self.time = novo_time
    def set_nome(self, novo_nome):
        self.nome = novo_nome
    def set_idade(self, novo_idade):
            self.idade = novo_idade
    def set_aumento(self, aumento):
        self.salario=self.salario+aumento
    def set_devido_salario(self, valor,idade):
        self.salario=(self.salario*valor)/idade
if __name__ == '__main__':
    jogador01=Brasileirao('MP','Cruzeiro', 30,200000)
    jogador02=Brasileirao('Pedro','Flamengo', 29,400000)
    jogador03=Brasileirao('Neymar','Santos', 33,1000000)
    print('O {} tem {} anos e é jogador do {} e recebe {} de salario'.format(jogador01.get_nome(),jogador01.idade,jogador01.time,jogador01.salario))
    print('O {} tem {} anos e é jogador do {} e recebe {} de salario'.format(jogador02.get_nome(), jogador02.idade,jogador02.time, jogador02.salario))
    print('O {} tem {} anos e é jogador do {} e recebe {} de salario'.format(jogador03.get_nome(), jogador03.idade,jogador03.time, jogador03.salario))
    aumentos=float(input("Quanto de aumento o MP10 merece receber: "))
    jogador01.set_aumento(aumentos)
    print('O {} tem {} anos e é jogador do {} e recebe {} de salario'.format(jogador01.get_nome(), jogador01.idade,jogador01.time, jogador01.salario))
    jogador02.set_nome('Arroyo')
    jogador02.set_idade(19)
    jogador02.set_time('Cruzeiro')
    jogador02.set_salario(45678.90)
    valore=float(input('Informe o valor de mercado do MP: '))
    jogador01.set_devido_salario(valore, 30)
    print('O {} tem {} anos e é jogador do {} e deve receber pelo menos {} de salario'.format(jogador01.get_nome(), jogador01.idade,jogador01.time, jogador01.salario))
