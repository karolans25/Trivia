#archivo = open("preguntas.txt", "r")
#print(archivo.read())
#archivo.close()

numOps = 3
numPre = 4
tipos = []
preguntas = []
opciones = []
correctas = []
cadena = ''
qs = []

with open("preguntas.txt") as archivo:
    #lee el archivo y separa los tipos de preguntas
    cadena = archivo.read().strip().split("Tipo:")
    del cadena[0]

for tipo in cadena:
    # Separa los tipos de preguntas
    temp = tipo.strip().split("\n")
    qs = []
    ops = []
    corr = []
    corr1 = []
    for i, e in enumerate(temp):
        if (i == 0):
            tipos.append(temp[0].strip())
        elif (i%numPre == 1):
            qs.append(temp[i])
            ops.append(temp[i+1 : i+1+numOps])

    preguntas.append(qs)
    opciones.append(ops)

c1 = []
c2 = []
for n1, e1 in enumerate(tipos):
    print(e1)
    for n2, e2 in enumerate(preguntas[n1]):
        print(e2)
        for n3, e3 in enumerate(opciones[n1][n2]):
            print(e3)
            if (e3[0].isupper()):
                print("Correcta")
                print(n3)
                c1.append(n3)
    correctas.append(c1)

print(preguntas)
print(opciones)
print(correctas)
