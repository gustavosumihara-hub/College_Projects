from rich import print

velocidade = int(input("Qual é a velocidade do seu carro: "))

if velocidade > 80:
    multa = (velocidade - 80) * 7

if 50 < velocidade <= 80:
    print("[green]Está tudo bem, você está no limite de velocidade permitido.[/green]")

elif velocidade <= 50:
    print("[yellow]Tome cuidado, você está em uma velocidade muito baixa.[/yellow]")

else:
    print("[red]Multado! Você excedeu o limite permitido de 80 km/h.[/red]")
    print(f"[red]Você terá que pagar {multa:.2f} reais.[/red]")

print("[blue]Tenha um bom dia e dirija com segurança!!![/blue]")