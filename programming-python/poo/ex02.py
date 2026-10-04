class Roupa:
    def __init__(self,modelo,tamanho,preco,cor):
        self.modelo=modelo
        self.tamanho=tamanho
        self.preco=preco
        self.cor=cor
    def get_modelo(self):
        return self.modelo

    def get_tamanho(self):
        return self.tamanho

    def get_preco(self):
        return self.preco

    def get_cor(self):
        return self.cor

    def set_modelo(self,novo_modelo):
        self.modelo=novo_modelo
    def set_tamanho(self,novo_tamanho):
        self.tamanho=novo_tamanho
    def set_preco(self,novo_preco):
        if novo_preco>0:
            self.preco=novo_preco
        else:
            print('Valoer invalido')
    def set_cor(self,novo_cor):
        self.cor=novo_cor
    def mostrar_tudo(self):
        print('Modelo=',self.modelo)
        print('Tamanho=', self.tamanho)
        print('Preço=', self.preco)
        print('Cor=', self.cor)
        return ""
    def aumento(self,aumento):
        self.preco=self.preco+aumento
    def lucro(self,lucro):
        lucro=self.preco-lucro
        return lucro