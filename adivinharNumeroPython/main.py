import random

numero_secreto = random.randint(1, 100)
tentativas = 0

while True:
    chute = int(input("Digite um número entre 1 e 100: "))
    tentativas += 1

    if chute < numero_secreto:
        print("Muito baixo!")
    elif chute > numero_secreto:
        print("Muito alto!")
    else:
        print(f"Parabéns! Você acertou em {tentativas} tentativas!")
        break
