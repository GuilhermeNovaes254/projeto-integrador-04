import requests
from xml.etree import ElementTree

arqEntrada = open('./id.txt')
idGames = arqEntrada.readlines()
lines = len(idGames)

#Abre arquivo de saida
import sys
stdout = sys.stdout
sys.stdout = open('./jogos.txt','w')

i = 0
while i < lines :
    url = 'https://boardgamegeek.com/xmlapi/boardgame/'+ idGames[i]
    response = requests.get(url)

    tree = ElementTree.fromstring(response.content)
    print(tree)
    i = i + 1

sys.stdout = stdout