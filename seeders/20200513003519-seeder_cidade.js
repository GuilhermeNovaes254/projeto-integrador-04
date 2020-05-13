'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'cidade', [{
          estado_id: '1',
          cidade: 'Senador Guiomard'
        }, {
          estado_id: '1',
          cidade: 'Acrelândia'
        },
        {
          estado_id: '1',
          cidade: 'Assis Brasil'
        },
        {
          estado_id: '1',
          cidade: 'Brasiléia'
        },
        {
          estado_id: '1',
          cidade: 'Capixaba'
        },
        {
          estado_id: '1',
          cidade: 'Cruzeiro do Sul'
        },
        {
          estado_id: '1',
          cidade: 'Epitaciolândia'
        },
        {
          estado_id: '1',
          cidade: 'Feijó'
        },
        {
          estado_id: '1',
          cidade: 'Jordão'
        },
        {
          estado_id: '1',
          cidade: 'Mâncio Lima'
        },
        {
          estado_id: '1',
          cidade: 'Manoel Urbano'
        },
        {
          estado_id: '1',
          cidade: 'Marechal Thaumaturgo'
        },
        {
          estado_id: '1',
          cidade: 'Plácido de Castro'
        },
        {
          estado_id: '1',
          cidade: 'Porto Acre'
        },
        {
          estado_id: '1',
          cidade: 'Porto Walter'
        },
        {
          estado_id: '1',
          cidade: 'Rodrigues Alves'
        },
        {
          estado_id: '1',
          cidade: 'Santa Rosa do Purus'
        },
        {
          estado_id: '1',
          cidade: 'Sena Madureira'
        },
        {
          estado_id: '1',
          cidade: 'Tarauacá'
        },
        {
          estado_id: '1',
          cidade: 'Xapuri'
        },
        {
          estado_id: '1',
          cidade: 'Bujari'
        },
        {
          estado_id: '1',
          cidade: 'Rio Branco'
        },
        {
          estado_id: '2',
          cidade: 'Pilar'
        },
        {
          estado_id: '2',
          cidade: 'Água Branca'
        },
        {
          estado_id: '2',
          cidade: 'Anadia'
        },
        {
          estado_id: '2',
          cidade: 'Arapiraca'
        },
        {
          estado_id: '2',
          cidade: 'Batalha'
        },
        {
          estado_id: '2',
          cidade: 'Belém'
        },
        {
          estado_id: '2',
          cidade: 'Belo Monte'
        },
        {
          estado_id: '2',
          cidade: 'Boca da Mata'
        },
        {
          estado_id: '2',
          cidade: 'Branquinha'
        },
        {
          estado_id: '2',
          cidade: 'Cacimbinhas'
        },
        {
          estado_id: '2',
          cidade: 'Cajueiro'
        },
        {
          estado_id: '2',
          cidade: 'Campestre'
        },
        {
          estado_id: '2',
          cidade: 'Campo Alegre'
        },
        {
          estado_id: '2',
          cidade: 'Campo Grande'
        },
        {
          estado_id: '2',
          cidade: 'Canapi'
        },
        {
          estado_id: '2',
          cidade: 'Capela'
        },
        {
          estado_id: '2',
          cidade: 'Carneiros'
        },
        {
          estado_id: '2',
          cidade: 'Chã Preta'
        },
        {
          estado_id: '2',
          cidade: 'Coité do Nóia'
        },
        {
          estado_id: '2',
          cidade: 'Colônia Leopoldina'
        },
        {
          estado_id: '2',
          cidade: 'Coruripe'
        },
        {
          estado_id: '2',
          cidade: 'Craíbas'
        },
        {
          estado_id: '2',
          cidade: 'Delmiro Gouveia'
        },
        {
          estado_id: '2',
          cidade: 'Dois Riachos'
        },
        {
          estado_id: '2',
          cidade: 'Estrela de Alagoas'
        },
        {
          estado_id: '2',
          cidade: 'Feira Grande'
        },
        {
          estado_id: '2',
          cidade: 'Feliz Deserto'
        },
        {
          estado_id: '2',
          cidade: 'Flexeiras'
        },
        {
          estado_id: '2',
          cidade: 'Girau do Ponciano'
        },
        {
          estado_id: '2',
          cidade: 'Ibateguara'
        },
        {
          estado_id: '2',
          cidade: 'Igaci'
        },
        {
          estado_id: '2',
          cidade: 'Igreja Nova'
        },
        {
          estado_id: '2',
          cidade: 'Inhapi'
        },
        {
          estado_id: '2',
          cidade: 'Jacaré dos Homens'
        },
        {
          estado_id: '2',
          cidade: 'Jacuípe'
        },
        {
          estado_id: '2',
          cidade: 'Japaratinga'
        },
        {
          estado_id: '2',
          cidade: 'Jaramataia'
        },
        {
          estado_id: '2',
          cidade: 'Jequiá da Praia'
        },
        {
          estado_id: '2',
          cidade: 'Joaquim Gomes'
        },
        {
          estado_id: '2',
          cidade: 'Jundiá'
        },
        {
          estado_id: '2',
          cidade: 'Junqueiro'
        },
        {
          estado_id: '2',
          cidade: 'Lagoa da Canoa'
        },
        {
          estado_id: '2',
          cidade: 'Limoeiro de Anadia'
        },
        {
          estado_id: '2',
          cidade: 'Major Isidoro'
        },
        {
          estado_id: '2',
          cidade: 'Mar Vermelho'
        },
        {
          estado_id: '2',
          cidade: 'Maragogi'
        },
        {
          estado_id: '2',
          cidade: 'Maravilha'
        },
        {
          estado_id: '2',
          cidade: 'Marechal Deodoro'
        },
        {
          estado_id: '2',
          cidade: 'Maribondo'
        },
        {
          estado_id: '2',
          cidade: 'Mata Grande'
        },
        {
          estado_id: '2',
          cidade: 'Matriz de Camaragibe'
        },
        {
          estado_id: '2',
          cidade: 'Minador do Negrão'
        },
        {
          estado_id: '2',
          cidade: 'Monteirópolis'
        },
        {
          estado_id: '2',
          cidade: 'Murici'
        },
        {
          estado_id: '2',
          cidade: 'Novo Lino'
        },
        {
          estado_id: '2',
          cidade: 'Olho d Água das Flores'
        },
        {
          estado_id: '2',
          cidade: 'Olho d Água do Casado'
        },
        {
          estado_id: '2',
          cidade: 'Olho d Água Grande'
        },
        {
          estado_id: '2',
          cidade: 'Olivença'
        },
        {
          estado_id: '2',
          cidade: 'Ouro Branco'
        },
        {
          estado_id: '2',
          cidade: 'Palestina'
        },
        {
          estado_id: '2',
          cidade: 'Palmeira dos Índios'
        },
        {
          estado_id: '2',
          cidade: 'Pão de Açúcar'
        },
        {
          estado_id: '2',
          cidade: 'Pariconha'
        },
        {
          estado_id: '2',
          cidade: 'Passo de Camaragibe'
        },
        {
          estado_id: '2',
          cidade: 'Paulo Jacinto'
        },
        {
          estado_id: '2',
          cidade: 'Penedo'
        },
        {
          estado_id: '2',
          cidade: 'Piaçabuçu'
        },
        {
          estado_id: '2',
          cidade: 'Pindoba'
        },
        {
          estado_id: '2',
          cidade: 'Piranhas'
        },
        {
          estado_id: '2',
          cidade: 'Poço das Trincheiras'
        },
        {
          estado_id: '2',
          cidade: 'Porto Calvo'
        },
        {
          estado_id: '2',
          cidade: 'Porto de Pedras'
        },
        {
          estado_id: '2',
          cidade: 'Porto Real do Colégio'
        },
        {
          estado_id: '2',
          cidade: 'Quebrangulo'
        },
        {
          estado_id: '2',
          cidade: 'Roteiro'
        },
        {
          estado_id: '2',
          cidade: 'Santana do Ipanema'
        },
        {
          estado_id: '2',
          cidade: 'Santana do Mundaú'
        },
        {
          estado_id: '2',
          cidade: 'São Brás'
        },
        {
          estado_id: '2',
          cidade: 'São José da Laje'
        },
        {
          estado_id: '2',
          cidade: 'São José da Tapera'
        },
        {
          estado_id: '2',
          cidade: 'São Luís do Quitunde'
        },
        {
          estado_id: '2',
          cidade: 'São Miguel dos Campos'
        },
        {
          estado_id: '2',
          cidade: 'São Miguel dos Milagres'
        },
        {
          estado_id: '2',
          cidade: 'São Sebastião'
        },
        {
          estado_id: '2',
          cidade: 'Senador Rui Palmeira'
        },
        {
          estado_id: '2',
          cidade: 'Tanque d Arca'
        },
        {
          estado_id: '2',
          cidade: 'Taquarana'
        },
        {
          estado_id: '2',
          cidade: 'Teotônio Vilela'
        },
        {
          estado_id: '2',
          cidade: 'Traipu'
        },
        {
          estado_id: '2',
          cidade: 'União dos Palmares'
        },
        {
          estado_id: '2',
          cidade: 'Viçosa'
        },
        {
          estado_id: '2',
          cidade: 'Messias'
        },
        {
          estado_id: '2',
          cidade: 'Atalaia'
        },
        {
          estado_id: '2',
          cidade: 'Rio Largo'
        },
        {
          estado_id: '2',
          cidade: 'Barra de Santo Antônio'
        },
        {
          estado_id: '2',
          cidade: 'Paripueira'
        },
        {
          estado_id: '2',
          cidade: 'Satuba'
        },
        {
          estado_id: '2',
          cidade: 'Barra de São Miguel'
        },
        {
          estado_id: '2',
          cidade: 'Santa Luzia do Norte'
        },
        {
          estado_id: '2',
          cidade: 'Coqueiro Seco'
        },
        {
          estado_id: '2',
          cidade: 'Maceió'
        },
        {
          estado_id: '3',
          cidade: 'Itacoatiara'
        },
        {
          estado_id: '3',
          cidade: 'Manacapuru'
        },
        {
          estado_id: '3',
          cidade: 'Manaquiri'
        },
        {
          estado_id: '3',
          cidade: 'Urucurituba'
        },
        {
          estado_id: '3',
          cidade: 'Alvarães'
        },
        {
          estado_id: '3',
          cidade: 'Amaturá'
        },
        {
          estado_id: '3',
          cidade: 'Anamã'
        },
        {
          estado_id: '3',
          cidade: 'Anori'
        },
        {
          estado_id: '3',
          cidade: 'Apuí'
        },
        {
          estado_id: '3',
          cidade: 'Atalaia do Norte'
        },
        {
          estado_id: '3',
          cidade: 'Autazes'
        },
        {
          estado_id: '3',
          cidade: 'Barcelos'
        },
        {
          estado_id: '3',
          cidade: 'Barreirinha'
        },
        {
          estado_id: '3',
          cidade: 'Benjamin Constant'
        },
        {
          estado_id: '3',
          cidade: 'Beruri'
        },
        {
          estado_id: '3',
          cidade: 'Boa Vista do Ramos'
        },
        {
          estado_id: '3',
          cidade: 'Boca do Acre'
        },
        {
          estado_id: '3',
          cidade: 'Borba'
        },
        {
          estado_id: '3',
          cidade: 'Caapiranga'
        },
        {
          estado_id: '3',
          cidade: 'Canutama'
        },
        {
          estado_id: '3',
          cidade: 'Carauari'
        },
        {
          estado_id: '3',
          cidade: 'Careiro'
        },
        {
          estado_id: '3',
          cidade: 'Careiro da Várzea'
        },
        {
          estado_id: '3',
          cidade: 'Coari'
        },
        {
          estado_id: '3',
          cidade: 'Codajás'
        },
        {
          estado_id: '3',
          cidade: 'Eirunepé'
        },
        {
          estado_id: '3',
          cidade: 'Envira'
        },
        {
          estado_id: '3',
          cidade: 'Fonte Boa'
        },
        {
          estado_id: '3',
          cidade: 'Guajará'
        },
        {
          estado_id: '3',
          cidade: 'Humaitá'
        },
        {
          estado_id: '3',
          cidade: 'Ipixuna'
        },
        {
          estado_id: '3',
          cidade: 'Itamarati'
        },
        {
          estado_id: '3',
          cidade: 'Itapiranga'
        },
        {
          estado_id: '3',
          cidade: 'Japurá'
        },
        {
          estado_id: '3',
          cidade: 'Juruá'
        },
        {
          estado_id: '3',
          cidade: 'Jutaí'
        },
        {
          estado_id: '3',
          cidade: 'Lábrea'
        },
        {
          estado_id: '3',
          cidade: 'Manicoré'
        },
        {
          estado_id: '3',
          cidade: 'Maraã'
        },
        {
          estado_id: '3',
          cidade: 'Maués'
        },
        {
          estado_id: '3',
          cidade: 'Nhamundá'
        },
        {
          estado_id: '3',
          cidade: 'Nova Olinda do Norte'
        },
        {
          estado_id: '3',
          cidade: 'Novo Airão'
        },
        {
          estado_id: '3',
          cidade: 'Novo Aripuanã'
        },
        {
          estado_id: '3',
          cidade: 'Parintins'
        },
        {
          estado_id: '3',
          cidade: 'Pauini'
        },
        {
          estado_id: '3',
          cidade: 'Presidente Figueiredo'
        },
        {
          estado_id: '3',
          cidade: 'Rio Preto da Eva'
        },
        {
          estado_id: '3',
          cidade: 'Santa Isabel do Rio Negro'
        },
        {
          estado_id: '3',
          cidade: 'Santo Antônio do Içá'
        },
        {
          estado_id: '3',
          cidade: 'São Gabriel da Cachoeira'
        },
        {
          estado_id: '3',
          cidade: 'São Paulo de Olivença'
        },
        {
          estado_id: '3',
          cidade: 'São Sebastião do Uatumã'
        },
        {
          estado_id: '3',
          cidade: 'Silves'
        },
        {
          estado_id: '3',
          cidade: 'Tabatinga'
        },
        {
          estado_id: '3',
          cidade: 'Tapauá'
        },
        {
          estado_id: '3',
          cidade: 'Tefé'
        },
        {
          estado_id: '3',
          cidade: 'Tonantins'
        },
        {
          estado_id: '3',
          cidade: 'Uarini'
        },
        {
          estado_id: '3',
          cidade: 'Urucará'
        },
        {
          estado_id: '3',
          cidade: 'Iranduba'
        },
        {
          estado_id: '3',
          cidade: 'Manaus'
        },
        {
          estado_id: '4',
          cidade: 'Amapá'
        },
        {
          estado_id: '4',
          cidade: 'Calçoene'
        },
        {
          estado_id: '4',
          cidade: 'Cutias'
        },
        {
          estado_id: '4',
          cidade: 'Ferreira Gomes'
        },
        {
          estado_id: '4',
          cidade: 'Itaubal'
        },
        {
          estado_id: '4',
          cidade: 'Laranjal do Jari'
        },
        {
          estado_id: '4',
          cidade: 'Mazagão'
        },
        {
          estado_id: '4',
          cidade: 'Pedra Branca do Amapari'
        },
        {
          estado_id: '4',
          cidade: 'Porto Grande'
        },
        {
          estado_id: '4',
          cidade: 'Pracuúba'
        },
        {
          estado_id: '4',
          cidade: 'Santana'
        },
        {
          estado_id: '4',
          cidade: 'Serra do Navio'
        },
        {
          estado_id: '4',
          cidade: 'Tartarugalzinho'
        },
        {
          estado_id: '4',
          cidade: 'Vitória do Jari'
        },
        {
          estado_id: '4',
          cidade: 'Oiapoque'
        },
        {
          estado_id: '4',
          cidade: 'Macapá'
        },
        {
          estado_id: '5',
          cidade: 'Candeias'
        },
        {
          estado_id: '5',
          cidade: 'Mata de São João'
        },
        {
          estado_id: '5',
          cidade: 'Abaíra'
        },
        {
          estado_id: '5',
          cidade: 'Abaré'
        },
        {
          estado_id: '5',
          cidade: 'Acajutiba'
        },
        {
          estado_id: '5',
          cidade: 'Adustina'
        },
        {
          estado_id: '5',
          cidade: 'Água Fria'
        },
        {
          estado_id: '5',
          cidade: 'Aiquara'
        },
        {
          estado_id: '5',
          cidade: 'Alagoinhas'
        },
        {
          estado_id: '5',
          cidade: 'Alcobaça'
        },
        {
          estado_id: '5',
          cidade: 'Almadina'
        },
        {
          estado_id: '5',
          cidade: 'Amargosa'
        },
        {
          estado_id: '5',
          cidade: 'Amélia Rodrigues'
        },
        {
          estado_id: '5',
          cidade: 'América Dourada'
        },
        {
          estado_id: '5',
          cidade: 'Anagé'
        },
        {
          estado_id: '5',
          cidade: 'Andaraí'
        },
        {
          estado_id: '5',
          cidade: 'Andorinha'
        },
        {
          estado_id: '5',
          cidade: 'Angical'
        },
        {
          estado_id: '5',
          cidade: 'Anguera'
        },
        {
          estado_id: '5',
          cidade: 'Antas'
        },
        {
          estado_id: '5',
          cidade: 'Antônio Cardoso'
        },
        {
          estado_id: '5',
          cidade: 'Antônio Gonçalves'
        },
        {
          estado_id: '5',
          cidade: 'Aporá'
        },
        {
          estado_id: '5',
          cidade: 'Apuarema'
        },
        {
          estado_id: '5',
          cidade: 'Araças'
        },
        {
          estado_id: '5',
          cidade: 'Aracatu'
        },
        {
          estado_id: '5',
          cidade: 'Araci'
        },
        {
          estado_id: '5',
          cidade: 'Aramari'
        },
        {
          estado_id: '5',
          cidade: 'Arataca'
        },
        {
          estado_id: '5',
          cidade: 'Aratuípe'
        },
        {
          estado_id: '5',
          cidade: 'Aurelino Leal'
        },
        {
          estado_id: '5',
          cidade: 'Baianópolis'
        },
        {
          estado_id: '5',
          cidade: 'Baixa Grande'
        },
        {
          estado_id: '5',
          cidade: 'Banzaê'
        },
        {
          estado_id: '5',
          cidade: 'Barra'
        },
        {
          estado_id: '5',
          cidade: 'Barra da Estiva'
        },
        {
          estado_id: '5',
          cidade: 'Barra do Choça'
        },
        {
          estado_id: '5',
          cidade: 'Barra do Mendes'
        },
        {
          estado_id: '5',
          cidade: 'Barra do Rocha'
        },
        {
          estado_id: '5',
          cidade: 'Barreiras'
        },
        {
          estado_id: '5',
          cidade: 'Barro Alto'
        },
        {
          estado_id: '5',
          cidade: 'Barro Preto'
        },
        {
          estado_id: '5',
          cidade: 'Barrocas'
        },
        {
          estado_id: '5',
          cidade: 'Belmonte'
        },
        {
          estado_id: '5',
          cidade: 'Belo Campo'
        },
        {
          estado_id: '5',
          cidade: 'Biritinga'
        },
        {
          estado_id: '5',
          cidade: 'Boa Nova'
        },
        {
          estado_id: '5',
          cidade: 'Boa Vista do Tupim'
        },
        {
          estado_id: '5',
          cidade: 'Bom Jesus da Lapa'
        },
        {
          estado_id: '5',
          cidade: 'Bom Jesus da Serra'
        },
        {
          estado_id: '5',
          cidade: 'Boninal'
        },
        {
          estado_id: '5',
          cidade: 'Bonito'
        },
        {
          estado_id: '5',
          cidade: 'Boquira'
        },
        {
          estado_id: '5',
          cidade: 'Botuporã'
        },
        {
          estado_id: '5',
          cidade: 'Brejões'
        },
        {
          estado_id: '5',
          cidade: 'Brejolândia'
        },
        {
          estado_id: '5',
          cidade: 'Brotas de Macaúbas'
        },
        {
          estado_id: '5',
          cidade: 'Brumado'
        },
        {
          estado_id: '5',
          cidade: 'Buerarema'
        },
        {
          estado_id: '5',
          cidade: 'Buritirama'
        },
        {
          estado_id: '5',
          cidade: 'Caatiba'
        },
        {
          estado_id: '5',
          cidade: 'Cabaceiras do Paraguaçu'
        },
        {
          estado_id: '5',
          cidade: 'Cachoeira'
        },
        {
          estado_id: '5',
          cidade: 'Caculé'
        },
        {
          estado_id: '5',
          cidade: 'Caém'
        },
        {
          estado_id: '5',
          cidade: 'Caetanos'
        },
        {
          estado_id: '5',
          cidade: 'Caetité'
        },
        {
          estado_id: '5',
          cidade: 'Cafarnaum'
        },
        {
          estado_id: '5',
          cidade: 'Cairu'
        },
        {
          estado_id: '5',
          cidade: 'Caldeirão Grande'
        },
        {
          estado_id: '5',
          cidade: 'Camacan'
        },
        {
          estado_id: '5',
          cidade: 'Camamu'
        },
        {
          estado_id: '5',
          cidade: 'Campo Alegre de Lourdes'
        },
        {
          estado_id: '5',
          cidade: 'Campo Formoso'
        },
        {
          estado_id: '5',
          cidade: 'Canápolis'
        },
        {
          estado_id: '5',
          cidade: 'Canarana'
        },
        {
          estado_id: '5',
          cidade: 'Canavieiras'
        },
        {
          estado_id: '5',
          cidade: 'Candeal'
        },
        {
          estado_id: '5',
          cidade: 'Candiba'
        },
        {
          estado_id: '5',
          cidade: 'Cândido Sales'
        },
        {
          estado_id: '5',
          cidade: 'Cansanção'
        },
        {
          estado_id: '5',
          cidade: 'Canudos'
        },
        {
          estado_id: '5',
          cidade: 'Capela do Alto Alegre'
        },
        {
          estado_id: '5',
          cidade: 'Capim Grosso'
        },
        {
          estado_id: '5',
          cidade: 'Caraíbas'
        },
        {
          estado_id: '5',
          cidade: 'Caravelas'
        },
        {
          estado_id: '5',
          cidade: 'Cardeal da Silva'
        },
        {
          estado_id: '5',
          cidade: 'Carinhanha'
        },
        {
          estado_id: '5',
          cidade: 'Casa Nova'
        },
        {
          estado_id: '5',
          cidade: 'Castro Alves'
        },
        {
          estado_id: '5',
          cidade: 'Catolândia'
        },
        {
          estado_id: '5',
          cidade: 'Catu'
        },
        {
          estado_id: '5',
          cidade: 'Caturama'
        },
        {
          estado_id: '5',
          cidade: 'Central'
        },
        {
          estado_id: '5',
          cidade: 'Chorrochó'
        },
        {
          estado_id: '5',
          cidade: 'Cícero Dantas'
        },
        {
          estado_id: '5',
          cidade: 'Cipó'
        },
        {
          estado_id: '5',
          cidade: 'Coaraci'
        },
        {
          estado_id: '5',
          cidade: 'Cocos'
        },
        {
          estado_id: '5',
          cidade: 'Conceição da Feira'
        },
        {
          estado_id: '5',
          cidade: 'Conceição do Almeida'
        },
        {
          estado_id: '5',
          cidade: 'Conceição do Coité'
        },
        {
          estado_id: '5',
          cidade: 'Conceição do Jacuípe'
        },
        {
          estado_id: '5',
          cidade: 'Conde'
        },
        {
          estado_id: '5',
          cidade: 'Condeúba'
        },
        {
          estado_id: '5',
          cidade: 'Contendas do Sincorá'
        },
        {
          estado_id: '5',
          cidade: 'Coração de Maria'
        },
        {
          estado_id: '5',
          cidade: 'Cordeiros'
        },
        {
          estado_id: '5',
          cidade: 'Coribe'
        },
        {
          estado_id: '5',
          cidade: 'Coronel João Sá'
        },
        {
          estado_id: '5',
          cidade: 'Correntina'
        },
        {
          estado_id: '5',
          cidade: 'Cotegipe'
        },
        {
          estado_id: '5',
          cidade: 'Cravolândia'
        },
        {
          estado_id: '5',
          cidade: 'Crisópolis'
        },
        {
          estado_id: '5',
          cidade: 'Cristópolis'
        },
        {
          estado_id: '5',
          cidade: 'Cruz das Almas'
        },
        {
          estado_id: '5',
          cidade: 'Curaçá'
        },
        {
          estado_id: '5',
          cidade: 'Dário Meira'
        },
        {
          estado_id: '5',
          cidade: 'Dom Basílio'
        },
        {
          estado_id: '5',
          cidade: 'Dom Macedo Costa'
        },
        {
          estado_id: '5',
          cidade: 'Elísio Medrado'
        },
        {
          estado_id: '5',
          cidade: 'Encruzilhada'
        },
        {
          estado_id: '5',
          cidade: 'Entre Rios'
        },
        {
          estado_id: '5',
          cidade: 'Érico Cardoso'
        },
        {
          estado_id: '5',
          cidade: 'Esplanada'
        },
        {
          estado_id: '5',
          cidade: 'Euclides da Cunha'
        },
        {
          estado_id: '5',
          cidade: 'Eunápolis'
        },
        {
          estado_id: '5',
          cidade: 'Fátima'
        },
        {
          estado_id: '5',
          cidade: 'Feira da Mata'
        },
        {
          estado_id: '5',
          cidade: 'Feira de Santana'
        },
        {
          estado_id: '5',
          cidade: 'Filadélfia'
        },
        {
          estado_id: '5',
          cidade: 'Firmino Alves'
        },
        {
          estado_id: '5',
          cidade: 'Floresta Azul'
        },
        {
          estado_id: '5',
          cidade: 'Formosa do Rio Preto'
        },
        {
          estado_id: '5',
          cidade: 'Gandu'
        },
        {
          estado_id: '5',
          cidade: 'Gavião'
        },
        {
          estado_id: '5',
          cidade: 'Gentio do Ouro'
        },
        {
          estado_id: '5',
          cidade: 'Glória'
        },
        {
          estado_id: '5',
          cidade: 'Gongogi'
        },
        {
          estado_id: '5',
          cidade: 'Governador Mangabeira'
        },
        {
          estado_id: '5',
          cidade: 'Guajeru'
        },
        {
          estado_id: '5',
          cidade: 'Guanambi'
        },
        {
          estado_id: '5',
          cidade: 'Guaratinga'
        },
        {
          estado_id: '5',
          cidade: 'Heliópolis'
        },
        {
          estado_id: '5',
          cidade: 'Iaçu'
        },
        {
          estado_id: '5',
          cidade: 'Ibiassucê'
        },
        {
          estado_id: '5',
          cidade: 'Ibicaraí'
        },
        {
          estado_id: '5',
          cidade: 'Ibicoara'
        },
        {
          estado_id: '5',
          cidade: 'Ibicuí'
        },
        {
          estado_id: '5',
          cidade: 'Ibipeba'
        },
        {
          estado_id: '5',
          cidade: 'Ibipitanga'
        },
        {
          estado_id: '5',
          cidade: 'Ibiquera'
        },
        {
          estado_id: '5',
          cidade: 'Ibirapitanga'
        },
        {
          estado_id: '5',
          cidade: 'Ibirapuã'
        },
        {
          estado_id: '5',
          cidade: 'Ibirataia'
        },
        {
          estado_id: '5',
          cidade: 'Ibitiara'
        },
        {
          estado_id: '5',
          cidade: 'Ibititá'
        },
        {
          estado_id: '5',
          cidade: 'Ibotirama'
        },
        {
          estado_id: '5',
          cidade: 'Ichu'
        },
        {
          estado_id: '5',
          cidade: 'Igaporã'
        },
        {
          estado_id: '5',
          cidade: 'Igrapiúna'
        },
        {
          estado_id: '5',
          cidade: 'Iguaí'
        },
        {
          estado_id: '5',
          cidade: 'Ilhéus'
        },
        {
          estado_id: '5',
          cidade: 'Inhambupe'
        },
        {
          estado_id: '5',
          cidade: 'Ipecaetá'
        },
        {
          estado_id: '5',
          cidade: 'Ipiaú'
        },
        {
          estado_id: '5',
          cidade: 'Ipirá'
        },
        {
          estado_id: '5',
          cidade: 'Ipupiara'
        },
        {
          estado_id: '5',
          cidade: 'Irajuba'
        },
        {
          estado_id: '5',
          cidade: 'Iramaia'
        },
        {
          estado_id: '5',
          cidade: 'Iraquara'
        },
        {
          estado_id: '5',
          cidade: 'Irará'
        },
        {
          estado_id: '5',
          cidade: 'Irecê'
        },
        {
          estado_id: '5',
          cidade: 'Itabela'
        },
        {
          estado_id: '5',
          cidade: 'Itaberaba'
        },
        {
          estado_id: '5',
          cidade: 'Itabuna'
        },
        {
          estado_id: '5',
          cidade: 'Itacaré'
        },
        {
          estado_id: '5',
          cidade: 'Itaeté'
        },
        {
          estado_id: '5',
          cidade: 'Itagi'
        },
        {
          estado_id: '5',
          cidade: 'Itagibá'
        },
        {
          estado_id: '5',
          cidade: 'Itagimirim'
        },
        {
          estado_id: '5',
          cidade: 'Itaguaçu da Bahia'
        },
        {
          estado_id: '5',
          cidade: 'Itaju do Colônia'
        },
        {
          estado_id: '5',
          cidade: 'Itajuípe'
        },
        {
          estado_id: '5',
          cidade: 'Itamaraju'
        },
        {
          estado_id: '5',
          cidade: 'Itamari'
        },
        {
          estado_id: '5',
          cidade: 'Itambé'
        },
        {
          estado_id: '5',
          cidade: 'Itanagra'
        },
        {
          estado_id: '5',
          cidade: 'Itanhém'
        },
        {
          estado_id: '5',
          cidade: 'Itapé'
        },
        {
          estado_id: '5',
          cidade: 'Itapebi'
        },
        {
          estado_id: '5',
          cidade: 'Itapetinga'
        },
        {
          estado_id: '5',
          cidade: 'Itapicuru'
        },
        {
          estado_id: '5',
          cidade: 'Itapitanga'
        },
        {
          estado_id: '5',
          cidade: 'Itaquara'
        },
        {
          estado_id: '5',
          cidade: 'Itarantim'
        },
        {
          estado_id: '5',
          cidade: 'Itatim'
        },
        {
          estado_id: '5',
          cidade: 'Itiruçu'
        },
        {
          estado_id: '5',
          cidade: 'Itiúba'
        },
        {
          estado_id: '5',
          cidade: 'Itororó'
        },
        {
          estado_id: '5',
          cidade: 'Ituaçu'
        },
        {
          estado_id: '5',
          cidade: 'Ituberá'
        },
        {
          estado_id: '5',
          cidade: 'Iuiú'
        },
        {
          estado_id: '5',
          cidade: 'Jaborandi'
        },
        {
          estado_id: '5',
          cidade: 'Jacaraci'
        },
        {
          estado_id: '5',
          cidade: 'Jacobina'
        },
        {
          estado_id: '5',
          cidade: 'Jaguaquara'
        },
        {
          estado_id: '5',
          cidade: 'Jaguarari'
        },
        {
          estado_id: '5',
          cidade: 'Jandaíra'
        },
        {
          estado_id: '5',
          cidade: 'Jequié'
        },
        {
          estado_id: '5',
          cidade: 'Jeremoabo'
        },
        {
          estado_id: '5',
          cidade: 'Jiquiriçá'
        },
        {
          estado_id: '5',
          cidade: 'Jitaúna'
        },
        {
          estado_id: '5',
          cidade: 'João Dourado'
        },
        {
          estado_id: '5',
          cidade: 'Juazeiro'
        },
        {
          estado_id: '5',
          cidade: 'Jucuruçu'
        },
        {
          estado_id: '5',
          cidade: 'Jussara'
        },
        {
          estado_id: '5',
          cidade: 'Jussari'
        },
        {
          estado_id: '5',
          cidade: 'Jussiape'
        },
        {
          estado_id: '5',
          cidade: 'Lafaiete Coutinho'
        },
        {
          estado_id: '5',
          cidade: 'Lagoa Real'
        },
        {
          estado_id: '5',
          cidade: 'Laje'
        },
        {
          estado_id: '5',
          cidade: 'Lajedão'
        },
        {
          estado_id: '5',
          cidade: 'Lajedinho'
        },
        {
          estado_id: '5',
          cidade: 'Lajedo do Tabocal'
        },
        {
          estado_id: '5',
          cidade: 'Lamarão'
        },
        {
          estado_id: '5',
          cidade: 'Lapão'
        },
        {
          estado_id: '5',
          cidade: 'Lençóis'
        },
        {
          estado_id: '5',
          cidade: 'Licínio de Almeida'
        },
        {
          estado_id: '5',
          cidade: 'Livramento de Nossa Senhora'
        },
        {
          estado_id: '5',
          cidade: 'Luís Eduardo Magalhães'
        },
        {
          estado_id: '5',
          cidade: 'Macajuba'
        },
        {
          estado_id: '5',
          cidade: 'Macarani'
        },
        {
          estado_id: '5',
          cidade: 'Macaúbas'
        },
        {
          estado_id: '5',
          cidade: 'Macururé'
        },
        {
          estado_id: '5',
          cidade: 'Maetinga'
        },
        {
          estado_id: '5',
          cidade: 'Maiquinique'
        },
        {
          estado_id: '5',
          cidade: 'Mairi'
        },
        {
          estado_id: '5',
          cidade: 'Malhada'
        },
        {
          estado_id: '5',
          cidade: 'Malhada de Pedras'
        },
        {
          estado_id: '5',
          cidade: 'Manoel Vitorino'
        },
        {
          estado_id: '5',
          cidade: 'Mansidão'
        },
        {
          estado_id: '5',
          cidade: 'Maracás'
        },
        {
          estado_id: '5',
          cidade: 'Maragogipe'
        },
        {
          estado_id: '5',
          cidade: 'Maraú'
        },
        {
          estado_id: '5',
          cidade: 'Marcionílio Souza'
        },
        {
          estado_id: '5',
          cidade: 'Mascote'
        },
        {
          estado_id: '5',
          cidade: 'Matina'
        },
        {
          estado_id: '5',
          cidade: 'Medeiros Neto'
        },
        {
          estado_id: '5',
          cidade: 'Miguel Calmon'
        },
        {
          estado_id: '5',
          cidade: 'Milagres'
        },
        {
          estado_id: '5',
          cidade: 'Mirangaba'
        },
        {
          estado_id: '5',
          cidade: 'Mirante'
        },
        {
          estado_id: '5',
          cidade: 'Monte Santo'
        },
        {
          estado_id: '5',
          cidade: 'Morpará'
        },
        {
          estado_id: '5',
          cidade: 'Morro do Chapéu'
        },
        {
          estado_id: '5',
          cidade: 'Mortugaba'
        },
        {
          estado_id: '5',
          cidade: 'Mucugê'
        },
        {
          estado_id: '5',
          cidade: 'Mucuri'
        },
        {
          estado_id: '5',
          cidade: 'Mulungu do Morro'
        },
        {
          estado_id: '5',
          cidade: 'Mundo Novo'
        },
        {
          estado_id: '5',
          cidade: 'Muniz Ferreira'
        },
        {
          estado_id: '5',
          cidade: 'Muquém de São Francisco'
        },
        {
          estado_id: '5',
          cidade: 'Muritiba'
        },
        {
          estado_id: '5',
          cidade: 'Mutuípe'
        },
        {
          estado_id: '5',
          cidade: 'Nazaré'
        },
        {
          estado_id: '5',
          cidade: 'Nilo Peçanha'
        },
        {
          estado_id: '5',
          cidade: 'Nordestina'
        },
        {
          estado_id: '5',
          cidade: 'Nova Canaã'
        },
        {
          estado_id: '5',
          cidade: 'Nova Fátima'
        },
        {
          estado_id: '5',
          cidade: 'Nova Ibiá'
        },
        {
          estado_id: '5',
          cidade: 'Nova Itarana'
        },
        {
          estado_id: '5',
          cidade: 'Nova Redenção'
        },
        {
          estado_id: '5',
          cidade: 'Nova Soure'
        },
        {
          estado_id: '5',
          cidade: 'Nova Viçosa'
        },
        {
          estado_id: '5',
          cidade: 'Novo Horizonte'
        },
        {
          estado_id: '5',
          cidade: 'Novo Triunfo'
        },
        {
          estado_id: '5',
          cidade: 'Olindina'
        },
        {
          estado_id: '5',
          cidade: 'Oliveira dos Brejinhos'
        },
        {
          estado_id: '5',
          cidade: 'Ouriçangas'
        },
        {
          estado_id: '5',
          cidade: 'Ourolândia'
        },
        {
          estado_id: '5',
          cidade: 'Palmas de Monte Alto'
        },
        {
          estado_id: '5',
          cidade: 'Palmeiras'
        },
        {
          estado_id: '5',
          cidade: 'Paramirim'
        },
        {
          estado_id: '5',
          cidade: 'Paratinga'
        },
        {
          estado_id: '5',
          cidade: 'Paripiranga'
        },
        {
          estado_id: '5',
          cidade: 'Pau Brasil'
        },
        {
          estado_id: '5',
          cidade: 'Paulo Afonso'
        },
        {
          estado_id: '5',
          cidade: 'Pé de Serra'
        },
        {
          estado_id: '5',
          cidade: 'Pedrão'
        },
        {
          estado_id: '5',
          cidade: 'Pedro Alexandre'
        },
        {
          estado_id: '5',
          cidade: 'Piatã'
        },
        {
          estado_id: '5',
          cidade: 'Pilão Arcado'
        },
        {
          estado_id: '5',
          cidade: 'Pindaí'
        },
        {
          estado_id: '5',
          cidade: 'Pindobaçu'
        },
        {
          estado_id: '5',
          cidade: 'Pintadas'
        },
        {
          estado_id: '5',
          cidade: 'Piraí do Norte'
        },
        {
          estado_id: '5',
          cidade: 'Piripá'
        },
        {
          estado_id: '5',
          cidade: 'Piritiba'
        },
        {
          estado_id: '5',
          cidade: 'Planaltino'
        },
        {
          estado_id: '5',
          cidade: 'Planalto'
        },
        {
          estado_id: '5',
          cidade: 'Poções'
        },
        {
          estado_id: '5',
          cidade: 'Pojuca'
        },
        {
          estado_id: '5',
          cidade: 'Ponto Novo'
        },
        {
          estado_id: '5',
          cidade: 'Porto Seguro'
        },
        {
          estado_id: '5',
          cidade: 'Potiraguá'
        },
        {
          estado_id: '5',
          cidade: 'Prado'
        },
        {
          estado_id: '5',
          cidade: 'Presidente Dutra'
        },
        {
          estado_id: '5',
          cidade: 'Presidente Jânio Quadros'
        },
        {
          estado_id: '5',
          cidade: 'Presidente Tancredo Neves'
        },
        {
          estado_id: '5',
          cidade: 'Queimadas'
        },
        {
          estado_id: '5',
          cidade: 'Quijingue'
        },
        {
          estado_id: '5',
          cidade: 'Quixabeira'
        },
        {
          estado_id: '5',
          cidade: 'Rafael Jambeiro'
        },
        {
          estado_id: '5',
          cidade: 'Remanso'
        },
        {
          estado_id: '5',
          cidade: 'Retirolândia'
        },
        {
          estado_id: '5',
          cidade: 'Riachão das Neves'
        },
        {
          estado_id: '5',
          cidade: 'Riachão do Jacuípe'
        },
        {
          estado_id: '5',
          cidade: 'Riacho de Santana'
        },
        {
          estado_id: '5',
          cidade: 'Ribeira do Amparo'
        },
        {
          estado_id: '5',
          cidade: 'Ribeira do Pombal'
        },
        {
          estado_id: '5',
          cidade: 'Ribeirão do Largo'
        },
        {
          estado_id: '5',
          cidade: 'Rio de Contas'
        },
        {
          estado_id: '5',
          cidade: 'Rio do Antônio'
        },
        {
          estado_id: '5',
          cidade: 'Rio do Pires'
        },
        {
          estado_id: '5',
          cidade: 'Rio Real'
        },
        {
          estado_id: '5',
          cidade: 'Rodelas'
        },
        {
          estado_id: '5',
          cidade: 'Ruy Barbosa'
        },
        {
          estado_id: '5',
          cidade: 'Santa Bárbara'
        },
        {
          estado_id: '5',
          cidade: 'Santa Brígida'
        },
        {
          estado_id: '5',
          cidade: 'Santa Cruz Cabrália'
        },
        {
          estado_id: '5',
          cidade: 'Santa Cruz da Vitória'
        },
        {
          estado_id: '5',
          cidade: 'Santa Inês'
        },
        {
          estado_id: '5',
          cidade: 'Santa Luzia'
        },
        {
          estado_id: '5',
          cidade: 'Santa Maria da Vitória'
        },
        {
          estado_id: '5',
          cidade: 'Santa Rita de Cássia'
        },
        {
          estado_id: '5',
          cidade: 'Santa Teresinha'
        },
        {
          estado_id: '5',
          cidade: 'Santaluz'
        },
        {
          estado_id: '5',
          cidade: 'Santana'
        },
        {
          estado_id: '5',
          cidade: 'Santanópolis'
        },
        {
          estado_id: '5',
          cidade: 'Santo Amaro'
        },
        {
          estado_id: '5',
          cidade: 'Santo Antônio de Jesus'
        },
        {
          estado_id: '5',
          cidade: 'Santo Estêvão'
        },
        {
          estado_id: '5',
          cidade: 'São Desidério'
        },
        {
          estado_id: '5',
          cidade: 'São Domingos'
        },
        {
          estado_id: '5',
          cidade: 'São Felipe'
        },
        {
          estado_id: '5',
          cidade: 'São Félix'
        },
        {
          estado_id: '5',
          cidade: 'São Félix do Coribe'
        },
        {
          estado_id: '5',
          cidade: 'São Gabriel'
        },
        {
          estado_id: '5',
          cidade: 'São Gonçalo dos Campos'
        },
        {
          estado_id: '5',
          cidade: 'São José da Vitória'
        },
        {
          estado_id: '5',
          cidade: 'São José do Jacuípe'
        },
        {
          estado_id: '5',
          cidade: 'São Miguel das Matas'
        },
        {
          estado_id: '5',
          cidade: 'São Sebastião do Passé'
        },
        {
          estado_id: '5',
          cidade: 'Sapeaçu'
        },
        {
          estado_id: '5',
          cidade: 'Sátiro Dias'
        },
        {
          estado_id: '5',
          cidade: 'Saúde'
        },
        {
          estado_id: '5',
          cidade: 'Seabra'
        },
        {
          estado_id: '5',
          cidade: 'Sebastião Laranjeiras'
        },
        {
          estado_id: '5',
          cidade: 'Senhor do Bonfim'
        },
        {
          estado_id: '5',
          cidade: 'Sento Sé'
        },
        {
          estado_id: '5',
          cidade: 'Serra do Ramalho'
        },
        {
          estado_id: '5',
          cidade: 'Serra Dourada'
        },
        {
          estado_id: '5',
          cidade: 'Serra Preta'
        },
        {
          estado_id: '5',
          cidade: 'Serrinha'
        },
        {
          estado_id: '5',
          cidade: 'Serrolândia'
        },
        {
          estado_id: '5',
          cidade: 'Sítio do Mato'
        },
        {
          estado_id: '5',
          cidade: 'Sítio do Quinto'
        },
        {
          estado_id: '5',
          cidade: 'Sobradinho'
        },
        {
          estado_id: '5',
          cidade: 'Souto Soares'
        },
        {
          estado_id: '5',
          cidade: 'Tabocas do Brejo Velho'
        },
        {
          estado_id: '5',
          cidade: 'Tanhaçu'
        },
        {
          estado_id: '5',
          cidade: 'Tanque Novo'
        },
        {
          estado_id: '5',
          cidade: 'Tanquinho'
        },
        {
          estado_id: '5',
          cidade: 'Taperoá'
        },
        {
          estado_id: '5',
          cidade: 'Tapiramutá'
        },
        {
          estado_id: '5',
          cidade: 'Teixeira de Freitas'
        },
        {
          estado_id: '5',
          cidade: 'Teodoro Sampaio'
        },
        {
          estado_id: '5',
          cidade: 'Teofilândia'
        },
        {
          estado_id: '5',
          cidade: 'Teolândia'
        },
        {
          estado_id: '5',
          cidade: 'Terra Nova'
        },
        {
          estado_id: '5',
          cidade: 'Tremedal'
        },
        {
          estado_id: '5',
          cidade: 'Tucano'
        },
        {
          estado_id: '5',
          cidade: 'Uauá'
        },
        {
          estado_id: '5',
          cidade: 'Ubaíra'
        },
        {
          estado_id: '5',
          cidade: 'Ubaitaba'
        },
        {
          estado_id: '5',
          cidade: 'Ubatã'
        },
        {
          estado_id: '5',
          cidade: 'Uibaí'
        },
        {
          estado_id: '5',
          cidade: 'Umburanas'
        },
        {
          estado_id: '5',
          cidade: 'Una'
        },
        {
          estado_id: '5',
          cidade: 'Urandi'
        },
        {
          estado_id: '5',
          cidade: 'Uruçuca'
        },
        {
          estado_id: '5',
          cidade: 'Utinga'
        },
        {
          estado_id: '5',
          cidade: 'Valença'
        },
        {
          estado_id: '5',
          cidade: 'Valente'
        },
        {
          estado_id: '5',
          cidade: 'Várzea da Roça'
        },
        {
          estado_id: '5',
          cidade: 'Várzea do Poço'
        },
        {
          estado_id: '5',
          cidade: 'Várzea Nova'
        },
        {
          estado_id: '5',
          cidade: 'Varzedo'
        },
        {
          estado_id: '5',
          cidade: 'Vereda'
        },
        {
          estado_id: '5',
          cidade: 'Vitória da Conquista'
        },
        {
          estado_id: '5',
          cidade: 'Wagner'
        },
        {
          estado_id: '5',
          cidade: 'Wanderley'
        },
        {
          estado_id: '5',
          cidade: 'Wenceslau Guimarães'
        },
        {
          estado_id: '5',
          cidade: 'Xique-Xique'
        },
        {
          estado_id: '5',
          cidade: 'Jaguaripe'
        },
        {
          estado_id: '5',
          cidade: 'Salinas da Margarida'
        },
        {
          estado_id: '5',
          cidade: 'Itaparica'
        },
        {
          estado_id: '5',
          cidade: 'Camaçari'
        },
        {
          estado_id: '5',
          cidade: 'São Francisco do Conde'
        },
        {
          estado_id: '5',
          cidade: 'Madre de Deus'
        },
        {
          estado_id: '5',
          cidade: 'Saubara'
        },
        {
          estado_id: '5',
          cidade: 'Salvador'
        },
        {
          estado_id: '5',
          cidade: 'Vera Cruz'
        },
        {
          estado_id: '5',
          cidade: 'Simões Filho'
        },
        {
          estado_id: '5',
          cidade: 'Lauro de Freitas'
        },
        {
          estado_id: '5',
          cidade: 'Dias d Ávila'
        },
        {
          estado_id: '6',
          cidade: 'Pindoretama'
        },
        {
          estado_id: '6',
          cidade: 'Guaiúba'
        },
        {
          estado_id: '6',
          cidade: 'Abaiara'
        },
        {
          estado_id: '6',
          cidade: 'Acarape'
        },
        {
          estado_id: '6',
          cidade: 'Acaraú'
        },
        {
          estado_id: '6',
          cidade: 'Acopiara'
        },
        {
          estado_id: '6',
          cidade: 'Aiuaba'
        },
        {
          estado_id: '6',
          cidade: 'Alcântaras'
        },
        {
          estado_id: '6',
          cidade: 'Altaneira'
        },
        {
          estado_id: '6',
          cidade: 'Alto Santo'
        },
        {
          estado_id: '6',
          cidade: 'Amontada'
        },
        {
          estado_id: '6',
          cidade: 'Antonina do Norte'
        },
        {
          estado_id: '6',
          cidade: 'Apuiarés'
        },
        {
          estado_id: '6',
          cidade: 'Aracati'
        },
        {
          estado_id: '6',
          cidade: 'Aracoiaba'
        },
        {
          estado_id: '6',
          cidade: 'Ararendá'
        },
        {
          estado_id: '6',
          cidade: 'Araripe'
        },
        {
          estado_id: '6',
          cidade: 'Aratuba'
        },
        {
          estado_id: '6',
          cidade: 'Arneiroz'
        },
        {
          estado_id: '6',
          cidade: 'Assaré'
        },
        {
          estado_id: '6',
          cidade: 'Aurora'
        },
        {
          estado_id: '6',
          cidade: 'Baixio'
        },
        {
          estado_id: '6',
          cidade: 'Banabuiú'
        },
        {
          estado_id: '6',
          cidade: 'Barbalha'
        },
        {
          estado_id: '6',
          cidade: 'Barreira'
        },
        {
          estado_id: '6',
          cidade: 'Barro'
        },
        {
          estado_id: '6',
          cidade: 'Barroquinha'
        },
        {
          estado_id: '6',
          cidade: 'Baturité'
        },
        {
          estado_id: '6',
          cidade: 'Beberibe'
        },
        {
          estado_id: '6',
          cidade: 'Bela Cruz'
        },
        {
          estado_id: '6',
          cidade: 'Boa Viagem'
        },
        {
          estado_id: '6',
          cidade: 'Brejo Santo'
        },
        {
          estado_id: '6',
          cidade: 'Camocim'
        },
        {
          estado_id: '6',
          cidade: 'Campos Sales'
        },
        {
          estado_id: '6',
          cidade: 'Canindé'
        },
        {
          estado_id: '6',
          cidade: 'Capistrano'
        },
        {
          estado_id: '6',
          cidade: 'Caridade'
        },
        {
          estado_id: '6',
          cidade: 'Cariré'
        },
        {
          estado_id: '6',
          cidade: 'Caririaçu'
        },
        {
          estado_id: '6',
          cidade: 'Cariús'
        },
        {
          estado_id: '6',
          cidade: 'Carnaubal'
        },
        {
          estado_id: '6',
          cidade: 'Cascavel'
        },
        {
          estado_id: '6',
          cidade: 'Catarina'
        },
        {
          estado_id: '6',
          cidade: 'Catunda'
        },
        {
          estado_id: '6',
          cidade: 'Cedro'
        },
        {
          estado_id: '6',
          cidade: 'Chaval'
        },
        {
          estado_id: '6',
          cidade: 'Choró'
        },
        {
          estado_id: '6',
          cidade: 'Chorozinho'
        },
        {
          estado_id: '6',
          cidade: 'Coreaú'
        },
        {
          estado_id: '6',
          cidade: 'Crateús'
        },
        {
          estado_id: '6',
          cidade: 'Crato'
        },
        {
          estado_id: '6',
          cidade: 'Croatá'
        },
        {
          estado_id: '6',
          cidade: 'Cruz'
        },
        {
          estado_id: '6',
          cidade: 'Deputado Irapuan Pinheiro'
        },
        {
          estado_id: '6',
          cidade: 'Ererê'
        },
        {
          estado_id: '6',
          cidade: 'Farias Brito'
        },
        {
          estado_id: '6',
          cidade: 'Forquilha'
        },
        {
          estado_id: '6',
          cidade: 'Fortim'
        },
        {
          estado_id: '6',
          cidade: 'Frecheirinha'
        },
        {
          estado_id: '6',
          cidade: 'General Sampaio'
        },
        {
          estado_id: '6',
          cidade: 'Graça'
        },
        {
          estado_id: '6',
          cidade: 'Granja'
        },
        {
          estado_id: '6',
          cidade: 'Granjeiro'
        },
        {
          estado_id: '6',
          cidade: 'Groaíras'
        },
        {
          estado_id: '6',
          cidade: 'Guaraciaba do Norte'
        },
        {
          estado_id: '6',
          cidade: 'Guaramiranga'
        },
        {
          estado_id: '6',
          cidade: 'Hidrolândia'
        },
        {
          estado_id: '6',
          cidade: 'Horizonte'
        },
        {
          estado_id: '6',
          cidade: 'Ibaretama'
        },
        {
          estado_id: '6',
          cidade: 'Ibiapina'
        },
        {
          estado_id: '6',
          cidade: 'Ibicuitinga'
        },
        {
          estado_id: '6',
          cidade: 'Icapuí'
        },
        {
          estado_id: '6',
          cidade: 'Icó'
        },
        {
          estado_id: '6',
          cidade: 'Iguatu'
        },
        {
          estado_id: '6',
          cidade: 'Independência'
        },
        {
          estado_id: '6',
          cidade: 'Ipaporanga'
        },
        {
          estado_id: '6',
          cidade: 'Ipaumirim'
        },
        {
          estado_id: '6',
          cidade: 'Ipu'
        },
        {
          estado_id: '6',
          cidade: 'Ipueiras'
        },
        {
          estado_id: '6',
          cidade: 'Iracema'
        },
        {
          estado_id: '6',
          cidade: 'Irauçuba'
        },
        {
          estado_id: '6',
          cidade: 'Itaiçaba'
        },
        {
          estado_id: '6',
          cidade: 'Itapajé'
        },
        {
          estado_id: '6',
          cidade: 'Itapipoca'
        },
        {
          estado_id: '6',
          cidade: 'Itapiúna'
        },
        {
          estado_id: '6',
          cidade: 'Itarema'
        },
        {
          estado_id: '6',
          cidade: 'Itatira'
        },
        {
          estado_id: '6',
          cidade: 'Jaguaretama'
        },
        {
          estado_id: '6',
          cidade: 'Jaguaribara'
        },
        {
          estado_id: '6',
          cidade: 'Jaguaribe'
        },
        {
          estado_id: '6',
          cidade: 'Jaguaruana'
        },
        {
          estado_id: '6',
          cidade: 'Jardim'
        },
        {
          estado_id: '6',
          cidade: 'Jati'
        },
        {
          estado_id: '6',
          cidade: 'Jijoca de Jericoacoara'
        },
        {
          estado_id: '6',
          cidade: 'Juazeiro do Norte'
        },
        {
          estado_id: '6',
          cidade: 'Jucás'
        },
        {
          estado_id: '6',
          cidade: 'Lavras da Mangabeira'
        },
        {
          estado_id: '6',
          cidade: 'Limoeiro do Norte'
        },
        {
          estado_id: '6',
          cidade: 'Madalena'
        },
        {
          estado_id: '6',
          cidade: 'Marco'
        },
        {
          estado_id: '6',
          cidade: 'Martinópole'
        },
        {
          estado_id: '6',
          cidade: 'Massapê'
        },
        {
          estado_id: '6',
          cidade: 'Mauriti'
        },
        {
          estado_id: '6',
          cidade: 'Meruoca'
        },
        {
          estado_id: '6',
          cidade: 'Milagres'
        },
        {
          estado_id: '6',
          cidade: 'Milhã'
        },
        {
          estado_id: '6',
          cidade: 'Miraíma'
        },
        {
          estado_id: '6',
          cidade: 'Missão Velha'
        },
        {
          estado_id: '6',
          cidade: 'Mombaça'
        },
        {
          estado_id: '6',
          cidade: 'Monsenhor Tabosa'
        },
        {
          estado_id: '6',
          cidade: 'Morada Nova'
        },
        {
          estado_id: '6',
          cidade: 'Moraújo'
        },
        {
          estado_id: '6',
          cidade: 'Morrinhos'
        },
        {
          estado_id: '6',
          cidade: 'Mucambo'
        },
        {
          estado_id: '6',
          cidade: 'Mulungu'
        },
        {
          estado_id: '6',
          cidade: 'Nova Olinda'
        },
        {
          estado_id: '6',
          cidade: 'Nova Russas'
        },
        {
          estado_id: '6',
          cidade: 'Novo Oriente'
        },
        {
          estado_id: '6',
          cidade: 'Ocara'
        },
        {
          estado_id: '6',
          cidade: 'Orós'
        },
        {
          estado_id: '6',
          cidade: 'Pacajus'
        },
        {
          estado_id: '6',
          cidade: 'Pacoti'
        },
        {
          estado_id: '6',
          cidade: 'Pacujá'
        },
        {
          estado_id: '6',
          cidade: 'Palhano'
        },
        {
          estado_id: '6',
          cidade: 'Palmácia'
        },
        {
          estado_id: '6',
          cidade: 'Paracuru'
        },
        {
          estado_id: '6',
          cidade: 'Paraipaba'
        },
        {
          estado_id: '6',
          cidade: 'Parambu'
        },
        {
          estado_id: '6',
          cidade: 'Paramoti'
        },
        {
          estado_id: '6',
          cidade: 'Pedra Branca'
        },
        {
          estado_id: '6',
          cidade: 'Penaforte'
        },
        {
          estado_id: '6',
          cidade: 'Pentecoste'
        },
        {
          estado_id: '6',
          cidade: 'Pereiro'
        },
        {
          estado_id: '6',
          cidade: 'Piquet Carneiro'
        },
        {
          estado_id: '6',
          cidade: 'Pires Ferreira'
        },
        {
          estado_id: '6',
          cidade: 'Poranga'
        },
        {
          estado_id: '6',
          cidade: 'Porteiras'
        },
        {
          estado_id: '6',
          cidade: 'Potengi'
        },
        {
          estado_id: '6',
          cidade: 'Potiretama'
        },
        {
          estado_id: '6',
          cidade: 'Quiterianópolis'
        },
        {
          estado_id: '6',
          cidade: 'Quixadá'
        },
        {
          estado_id: '6',
          cidade: 'Quixelô'
        },
        {
          estado_id: '6',
          cidade: 'Quixeramobim'
        },
        {
          estado_id: '6',
          cidade: 'Quixeré'
        },
        {
          estado_id: '6',
          cidade: 'Redenção'
        },
        {
          estado_id: '6',
          cidade: 'Reriutaba'
        },
        {
          estado_id: '6',
          cidade: 'Russas'
        },
        {
          estado_id: '6',
          cidade: 'Saboeiro'
        },
        {
          estado_id: '6',
          cidade: 'Salitre'
        },
        {
          estado_id: '6',
          cidade: 'Santa Quitéria'
        },
        {
          estado_id: '6',
          cidade: 'Santana do Acaraú'
        },
        {
          estado_id: '6',
          cidade: 'Santana do Cariri'
        },
        {
          estado_id: '6',
          cidade: 'São Benedito'
        },
        {
          estado_id: '6',
          cidade: 'São Gonçalo do Amarante'
        },
        {
          estado_id: '6',
          cidade: 'São João do Jaguaribe'
        },
        {
          estado_id: '6',
          cidade: 'São Luís do Curu'
        },
        {
          estado_id: '6',
          cidade: 'Senador Pompeu'
        },
        {
          estado_id: '6',
          cidade: 'Senador Sá'
        },
        {
          estado_id: '6',
          cidade: 'Sobral'
        },
        {
          estado_id: '6',
          cidade: 'Solonópole'
        },
        {
          estado_id: '6',
          cidade: 'Tabuleiro do Norte'
        },
        {
          estado_id: '6',
          cidade: 'Tamboril'
        },
        {
          estado_id: '6',
          cidade: 'Tarrafas'
        },
        {
          estado_id: '6',
          cidade: 'Tauá'
        },
        {
          estado_id: '6',
          cidade: 'Tejuçuoca'
        },
        {
          estado_id: '6',
          cidade: 'Tianguá'
        },
        {
          estado_id: '6',
          cidade: 'Trairi'
        },
        {
          estado_id: '6',
          cidade: 'Tururu'
        },
        {
          estado_id: '6',
          cidade: 'Ubajara'
        },
        {
          estado_id: '6',
          cidade: 'Umari'
        },
        {
          estado_id: '6',
          cidade: 'Umirim'
        },
        {
          estado_id: '6',
          cidade: 'Uruburetama'
        },
        {
          estado_id: '6',
          cidade: 'Uruoca'
        },
        {
          estado_id: '6',
          cidade: 'Varjota'
        },
        {
          estado_id: '6',
          cidade: 'Várzea Alegre'
        },
        {
          estado_id: '6',
          cidade: 'Viçosa do Ceará'
        },
        {
          estado_id: '6',
          cidade: 'Aquiraz'
        },
        {
          estado_id: '6',
          cidade: 'Maracanaú'
        },
        {
          estado_id: '6',
          cidade: 'Pacatuba'
        },
        {
          estado_id: '6',
          cidade: 'Itaitinga'
        },
        {
          estado_id: '6',
          cidade: 'Caucaia'
        },
        {
          estado_id: '6',
          cidade: 'Eusébio'
        },
        {
          estado_id: '6',
          cidade: 'Fortaleza'
        },
        {
          estado_id: '6',
          cidade: 'Maranguape'
        },
        {
          estado_id: '7',
          cidade: 'Brasília'
        },
        {
          estado_id: '8',
          cidade: 'Guarapari'
        },
        {
          estado_id: '8',
          cidade: 'Afonso Cláudio'
        },
        {
          estado_id: '8',
          cidade: 'Água Doce do Norte'
        },
        {
          estado_id: '8',
          cidade: 'Águia Branca'
        },
        {
          estado_id: '8',
          cidade: 'Alegre'
        },
        {
          estado_id: '8',
          cidade: 'Alfredo Chaves'
        },
        {
          estado_id: '8',
          cidade: 'Alto Rio Novo'
        },
        {
          estado_id: '8',
          cidade: 'Anchieta'
        },
        {
          estado_id: '8',
          cidade: 'Apiacá'
        },
        {
          estado_id: '8',
          cidade: 'Aracruz'
        },
        {
          estado_id: '8',
          cidade: 'Atilio Vivacqua'
        },
        {
          estado_id: '8',
          cidade: 'Baixo Guandu'
        },
        {
          estado_id: '8',
          cidade: 'Barra de São Francisco'
        },
        {
          estado_id: '8',
          cidade: 'Boa Esperança'
        },
        {
          estado_id: '8',
          cidade: 'Bom Jesus do Norte'
        },
        {
          estado_id: '8',
          cidade: 'Brejetuba'
        },
        {
          estado_id: '8',
          cidade: 'Cachoeiro de Itapemirim'
        },
        {
          estado_id: '8',
          cidade: 'Castelo'
        },
        {
          estado_id: '8',
          cidade: 'Colatina'
        },
        {
          estado_id: '8',
          cidade: 'Conceição da Barra'
        },
        {
          estado_id: '8',
          cidade: 'Conceição do Castelo'
        },
        {
          estado_id: '8',
          cidade: 'Divino de São Lourenço'
        },
        {
          estado_id: '8',
          cidade: 'Domingos Martins'
        },
        {
          estado_id: '8',
          cidade: 'Dores do Rio Preto'
        },
        {
          estado_id: '8',
          cidade: 'Ecoporanga'
        },
        {
          estado_id: '8',
          cidade: 'Fundão'
        },
        {
          estado_id: '8',
          cidade: 'Governador Lindenberg'
        },
        {
          estado_id: '8',
          cidade: 'Guaçuí'
        },
        {
          estado_id: '8',
          cidade: 'Ibatiba'
        },
        {
          estado_id: '8',
          cidade: 'Ibiraçu'
        },
        {
          estado_id: '8',
          cidade: 'Ibitirama'
        },
        {
          estado_id: '8',
          cidade: 'Iconha'
        },
        {
          estado_id: '8',
          cidade: 'Irupi'
        },
        {
          estado_id: '8',
          cidade: 'Itaguaçu'
        },
        {
          estado_id: '8',
          cidade: 'Itapemirim'
        },
        {
          estado_id: '8',
          cidade: 'Itarana'
        },
        {
          estado_id: '8',
          cidade: 'Iúna'
        },
        {
          estado_id: '8',
          cidade: 'Jaguaré'
        },
        {
          estado_id: '8',
          cidade: 'Jerônimo Monteiro'
        },
        {
          estado_id: '8',
          cidade: 'João Neiva'
        },
        {
          estado_id: '8',
          cidade: 'Laranja da Terra'
        },
        {
          estado_id: '8',
          cidade: 'Linhares'
        },
        {
          estado_id: '8',
          cidade: 'Mantenópolis'
        },
        {
          estado_id: '8',
          cidade: 'Marataízes'
        },
        {
          estado_id: '8',
          cidade: 'Marechal Floriano'
        },
        {
          estado_id: '8',
          cidade: 'Marilândia'
        },
        {
          estado_id: '8',
          cidade: 'Mimoso do Sul'
        },
        {
          estado_id: '8',
          cidade: 'Montanha'
        },
        {
          estado_id: '8',
          cidade: 'Mucurici'
        },
        {
          estado_id: '8',
          cidade: 'Muniz Freire'
        },
        {
          estado_id: '8',
          cidade: 'Muqui'
        },
        {
          estado_id: '8',
          cidade: 'Nova Venécia'
        },
        {
          estado_id: '8',
          cidade: 'Pancas'
        },
        {
          estado_id: '8',
          cidade: 'Pedro Canário'
        },
        {
          estado_id: '8',
          cidade: 'Pinheiros'
        },
        {
          estado_id: '8',
          cidade: 'Piúma'
        },
        {
          estado_id: '8',
          cidade: 'Ponto Belo'
        },
        {
          estado_id: '8',
          cidade: 'Presidente Kennedy'
        },
        {
          estado_id: '8',
          cidade: 'Rio Bananal'
        },
        {
          estado_id: '8',
          cidade: 'Rio Novo do Sul'
        },
        {
          estado_id: '8',
          cidade: 'Santa Leopoldina'
        },
        {
          estado_id: '8',
          cidade: 'Santa Maria de Jetibá'
        },
        {
          estado_id: '8',
          cidade: 'Santa Teresa'
        },
        {
          estado_id: '8',
          cidade: 'São Domingos do Norte'
        },
        {
          estado_id: '8',
          cidade: 'São Gabriel da Palha'
        },
        {
          estado_id: '8',
          cidade: 'São José do Calçado'
        },
        {
          estado_id: '8',
          cidade: 'São Mateus'
        },
        {
          estado_id: '8',
          cidade: 'São Roque do Canaã'
        },
        {
          estado_id: '8',
          cidade: 'Sooretama'
        },
        {
          estado_id: '8',
          cidade: 'Vargem Alta'
        },
        {
          estado_id: '8',
          cidade: 'Venda Nova do Imigrante'
        },
        {
          estado_id: '8',
          cidade: 'Viana'
        },
        {
          estado_id: '8',
          cidade: 'Vila Pavão'
        },
        {
          estado_id: '8',
          cidade: 'Vila Valério'
        },
        {
          estado_id: '8',
          cidade: 'Cariacica'
        },
        {
          estado_id: '8',
          cidade: 'Vitória'
        },
        {
          estado_id: '8',
          cidade: 'Serra'
        },
        {
          estado_id: '8',
          cidade: 'Vila Velha'
        },
        {
          estado_id: '9',
          cidade: 'Caldazinha'
        },
        {
          estado_id: '9',
          cidade: 'Terezópolis de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Campo Limpo de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Ouro Verde de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Abadiânia'
        },
        {
          estado_id: '9',
          cidade: 'Acreúna'
        },
        {
          estado_id: '9',
          cidade: 'Adelândia'
        },
        {
          estado_id: '9',
          cidade: 'Água Fria de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Água Limpa'
        },
        {
          estado_id: '9',
          cidade: 'Águas Lindas de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Aloândia'
        },
        {
          estado_id: '9',
          cidade: 'Alto Horizonte'
        },
        {
          estado_id: '9',
          cidade: 'Alto Paraíso de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Alvorada do Norte'
        },
        {
          estado_id: '9',
          cidade: 'Amaralina'
        },
        {
          estado_id: '9',
          cidade: 'Americano do Brasil'
        },
        {
          estado_id: '9',
          cidade: 'Amorinópolis'
        },
        {
          estado_id: '9',
          cidade: 'Anhanguera'
        },
        {
          estado_id: '9',
          cidade: 'Anicuns'
        },
        {
          estado_id: '9',
          cidade: 'Aparecida do Rio Doce'
        },
        {
          estado_id: '9',
          cidade: 'Aporé'
        },
        {
          estado_id: '9',
          cidade: 'Araçu'
        },
        {
          estado_id: '9',
          cidade: 'Aragarças'
        },
        {
          estado_id: '9',
          cidade: 'Aragoiânia'
        },
        {
          estado_id: '9',
          cidade: 'Araguapaz'
        },
        {
          estado_id: '9',
          cidade: 'Arenópolis'
        },
        {
          estado_id: '9',
          cidade: 'Aruanã'
        },
        {
          estado_id: '9',
          cidade: 'Aurilândia'
        },
        {
          estado_id: '9',
          cidade: 'Avelinópolis'
        },
        {
          estado_id: '9',
          cidade: 'Baliza'
        },
        {
          estado_id: '9',
          cidade: 'Barro Alto'
        },
        {
          estado_id: '9',
          cidade: 'Bela Vista de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Bom Jardim de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Bom Jesus de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Bonfinópolis'
        },
        {
          estado_id: '9',
          cidade: 'Bonópolis'
        },
        {
          estado_id: '9',
          cidade: 'Brazabrantes'
        },
        {
          estado_id: '9',
          cidade: 'Britânia'
        },
        {
          estado_id: '9',
          cidade: 'Buriti Alegre'
        },
        {
          estado_id: '9',
          cidade: 'Buriti de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Buritinópolis'
        },
        {
          estado_id: '9',
          cidade: 'Cabeceiras'
        },
        {
          estado_id: '9',
          cidade: 'Cachoeira Alta'
        },
        {
          estado_id: '9',
          cidade: 'Cachoeira de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Cachoeira Dourada'
        },
        {
          estado_id: '9',
          cidade: 'Caçu'
        },
        {
          estado_id: '9',
          cidade: 'Caiapônia'
        },
        {
          estado_id: '9',
          cidade: 'Caldas Novas'
        },
        {
          estado_id: '9',
          cidade: 'Campestre de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Campinaçu'
        },
        {
          estado_id: '9',
          cidade: 'Campinorte'
        },
        {
          estado_id: '9',
          cidade: 'Campo Alegre de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Campos Belos'
        },
        {
          estado_id: '9',
          cidade: 'Campos Verdes'
        },
        {
          estado_id: '9',
          cidade: 'Carmo do Rio Verde'
        },
        {
          estado_id: '9',
          cidade: 'Castelândia'
        },
        {
          estado_id: '9',
          cidade: 'Catalão'
        },
        {
          estado_id: '9',
          cidade: 'Caturaí'
        },
        {
          estado_id: '9',
          cidade: 'Cavalcante'
        },
        {
          estado_id: '9',
          cidade: 'Ceres'
        },
        {
          estado_id: '9',
          cidade: 'Cezarina'
        },
        {
          estado_id: '9',
          cidade: 'Chapadão do Céu'
        },
        {
          estado_id: '9',
          cidade: 'Cidade Ocidental'
        },
        {
          estado_id: '9',
          cidade: 'Cocalzinho de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Colinas do Sul'
        },
        {
          estado_id: '9',
          cidade: 'Córrego do Ouro'
        },
        {
          estado_id: '9',
          cidade: 'Corumbá de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Corumbaíba'
        },
        {
          estado_id: '9',
          cidade: 'Cristianópolis'
        },
        {
          estado_id: '9',
          cidade: 'Crixás'
        },
        {
          estado_id: '9',
          cidade: 'Cromínia'
        },
        {
          estado_id: '9',
          cidade: 'Cumari'
        },
        {
          estado_id: '9',
          cidade: 'Damianópolis'
        },
        {
          estado_id: '9',
          cidade: 'Damolândia'
        },
        {
          estado_id: '9',
          cidade: 'Davinópolis'
        },
        {
          estado_id: '9',
          cidade: 'Diorama'
        },
        {
          estado_id: '9',
          cidade: 'Divinópolis de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Doverlândia'
        },
        {
          estado_id: '9',
          cidade: 'Edealina'
        },
        {
          estado_id: '9',
          cidade: 'Edéia'
        },
        {
          estado_id: '9',
          cidade: 'Estrela do Norte'
        },
        {
          estado_id: '9',
          cidade: 'Faina'
        },
        {
          estado_id: '9',
          cidade: 'Fazenda Nova'
        },
        {
          estado_id: '9',
          cidade: 'Firminópolis'
        },
        {
          estado_id: '9',
          cidade: 'Flores de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Formosa'
        },
        {
          estado_id: '9',
          cidade: 'Formoso'
        },
        {
          estado_id: '9',
          cidade: 'Gameleira de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Goianápolis'
        },
        {
          estado_id: '9',
          cidade: 'Goiandira'
        },
        {
          estado_id: '9',
          cidade: 'Goianésia'
        },
        {
          estado_id: '9',
          cidade: 'Goianira'
        },
        {
          estado_id: '9',
          cidade: 'Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Goiatuba'
        },
        {
          estado_id: '9',
          cidade: 'Gouvelândia'
        },
        {
          estado_id: '9',
          cidade: 'Guapó'
        },
        {
          estado_id: '9',
          cidade: 'Guaraíta'
        },
        {
          estado_id: '9',
          cidade: 'Guarani de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Guarinos'
        },
        {
          estado_id: '9',
          cidade: 'Heitoraí'
        },
        {
          estado_id: '9',
          cidade: 'Hidrolândia'
        },
        {
          estado_id: '9',
          cidade: 'Hidrolina'
        },
        {
          estado_id: '9',
          cidade: 'Iaciara'
        },
        {
          estado_id: '9',
          cidade: 'Inaciolândia'
        },
        {
          estado_id: '9',
          cidade: 'Indiara'
        },
        {
          estado_id: '9',
          cidade: 'Inhumas'
        },
        {
          estado_id: '9',
          cidade: 'Ipameri'
        },
        {
          estado_id: '9',
          cidade: 'Ipiranga de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Iporá'
        },
        {
          estado_id: '9',
          cidade: 'Israelândia'
        },
        {
          estado_id: '9',
          cidade: 'Itaberaí'
        },
        {
          estado_id: '9',
          cidade: 'Itaguari'
        },
        {
          estado_id: '9',
          cidade: 'Itaguaru'
        },
        {
          estado_id: '9',
          cidade: 'Itajá'
        },
        {
          estado_id: '9',
          cidade: 'Itapaci'
        },
        {
          estado_id: '9',
          cidade: 'Itapirapuã'
        },
        {
          estado_id: '9',
          cidade: 'Itapuranga'
        },
        {
          estado_id: '9',
          cidade: 'Itarumã'
        },
        {
          estado_id: '9',
          cidade: 'Itauçu'
        },
        {
          estado_id: '9',
          cidade: 'Itumbiara'
        },
        {
          estado_id: '9',
          cidade: 'Ivolândia'
        },
        {
          estado_id: '9',
          cidade: 'Jandaia'
        },
        {
          estado_id: '9',
          cidade: 'Jaraguá'
        },
        {
          estado_id: '9',
          cidade: 'Jataí'
        },
        {
          estado_id: '9',
          cidade: 'Jaupaci'
        },
        {
          estado_id: '9',
          cidade: 'Jesúpolis'
        },
        {
          estado_id: '9',
          cidade: 'Joviânia'
        },
        {
          estado_id: '9',
          cidade: 'Jussara'
        },
        {
          estado_id: '9',
          cidade: 'Lagoa Santa'
        },
        {
          estado_id: '9',
          cidade: 'Leopoldo de Bulhões'
        },
        {
          estado_id: '9',
          cidade: 'Luziânia'
        },
        {
          estado_id: '9',
          cidade: 'Mairipotaba'
        },
        {
          estado_id: '9',
          cidade: 'Mambaí'
        },
        {
          estado_id: '9',
          cidade: 'Mara Rosa'
        },
        {
          estado_id: '9',
          cidade: 'Marzagão'
        },
        {
          estado_id: '9',
          cidade: 'Matrinchã'
        },
        {
          estado_id: '9',
          cidade: 'Maurilândia'
        },
        {
          estado_id: '9',
          cidade: 'Mimoso de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Minaçu'
        },
        {
          estado_id: '9',
          cidade: 'Mineiros'
        },
        {
          estado_id: '9',
          cidade: 'Moiporá'
        },
        {
          estado_id: '9',
          cidade: 'Monte Alegre de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Montes Claros de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Montividiu'
        },
        {
          estado_id: '9',
          cidade: 'Montividiu do Norte'
        },
        {
          estado_id: '9',
          cidade: 'Morrinhos'
        },
        {
          estado_id: '9',
          cidade: 'Morro Agudo de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Mossâmedes'
        },
        {
          estado_id: '9',
          cidade: 'Mozarlândia'
        },
        {
          estado_id: '9',
          cidade: 'Mundo Novo'
        },
        {
          estado_id: '9',
          cidade: 'Mutunópolis'
        },
        {
          estado_id: '9',
          cidade: 'Nazário'
        },
        {
          estado_id: '9',
          cidade: 'Nerópolis'
        },
        {
          estado_id: '9',
          cidade: 'Niquelândia'
        },
        {
          estado_id: '9',
          cidade: 'Nova América'
        },
        {
          estado_id: '9',
          cidade: 'Nova Aurora'
        },
        {
          estado_id: '9',
          cidade: 'Nova Crixás'
        },
        {
          estado_id: '9',
          cidade: 'Nova Glória'
        },
        {
          estado_id: '9',
          cidade: 'Nova Iguaçu de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Nova Roma'
        },
        {
          estado_id: '9',
          cidade: 'Nova Veneza'
        },
        {
          estado_id: '9',
          cidade: 'Novo Brasil'
        },
        {
          estado_id: '9',
          cidade: 'Novo Planalto'
        },
        {
          estado_id: '9',
          cidade: 'Orizona'
        },
        {
          estado_id: '9',
          cidade: 'Ouvidor'
        },
        {
          estado_id: '9',
          cidade: 'Padre Bernardo'
        },
        {
          estado_id: '9',
          cidade: 'Palestina de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Palmeiras de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Palmelo'
        },
        {
          estado_id: '9',
          cidade: 'Palminópolis'
        },
        {
          estado_id: '9',
          cidade: 'Panamá'
        },
        {
          estado_id: '9',
          cidade: 'Paranaiguara'
        },
        {
          estado_id: '9',
          cidade: 'Paraúna'
        },
        {
          estado_id: '9',
          cidade: 'Perolândia'
        },
        {
          estado_id: '9',
          cidade: 'Petrolina de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Pilar de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Piracanjuba'
        },
        {
          estado_id: '9',
          cidade: 'Piranhas'
        },
        {
          estado_id: '9',
          cidade: 'Pirenópolis'
        },
        {
          estado_id: '9',
          cidade: 'Pires do Rio'
        },
        {
          estado_id: '9',
          cidade: 'Planaltina'
        },
        {
          estado_id: '9',
          cidade: 'Pontalina'
        },
        {
          estado_id: '9',
          cidade: 'Porangatu'
        },
        {
          estado_id: '9',
          cidade: 'Porteirão'
        },
        {
          estado_id: '9',
          cidade: 'Portelândia'
        },
        {
          estado_id: '9',
          cidade: 'Posse'
        },
        {
          estado_id: '9',
          cidade: 'Professor Jamil'
        },
        {
          estado_id: '9',
          cidade: 'Quirinópolis'
        },
        {
          estado_id: '9',
          cidade: 'Rialma'
        },
        {
          estado_id: '9',
          cidade: 'Rianápolis'
        },
        {
          estado_id: '9',
          cidade: 'Rio Quente'
        },
        {
          estado_id: '9',
          cidade: 'Rubiataba'
        },
        {
          estado_id: '9',
          cidade: 'Sanclerlândia'
        },
        {
          estado_id: '9',
          cidade: 'Santa Bárbara de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Santa Cruz de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Santa Fé de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Santa Helena de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Santa Isabel'
        },
        {
          estado_id: '9',
          cidade: 'Santa Rita do Araguaia'
        },
        {
          estado_id: '9',
          cidade: 'Santa Rita do Novo Destino'
        },
        {
          estado_id: '9',
          cidade: 'Santa Rosa de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Santa Tereza de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Santa Terezinha de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Santo Antônio da Barra'
        },
        {
          estado_id: '9',
          cidade: 'Santo Antônio de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Santo Antônio do Descoberto'
        },
        {
          estado_id: '9',
          cidade: 'São Domingos'
        },
        {
          estado_id: '9',
          cidade: 'São Francisco de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'São João da Paraúna'
        },
        {
          estado_id: '9',
          cidade: 'São João d Aliança'
        },
        {
          estado_id: '9',
          cidade: 'São Luís de Montes Belos'
        },
        {
          estado_id: '9',
          cidade: 'São Luiz do Norte'
        },
        {
          estado_id: '9',
          cidade: 'São Miguel do Araguaia'
        },
        {
          estado_id: '9',
          cidade: 'São Miguel do Passa Quatro'
        },
        {
          estado_id: '9',
          cidade: 'São Patrício'
        },
        {
          estado_id: '9',
          cidade: 'São Simão'
        },
        {
          estado_id: '9',
          cidade: 'Serranópolis'
        },
        {
          estado_id: '9',
          cidade: 'Silvânia'
        },
        {
          estado_id: '9',
          cidade: 'Simolândia'
        },
        {
          estado_id: '9',
          cidade: 'Sítio d Abadia'
        },
        {
          estado_id: '9',
          cidade: 'Taquaral de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Teresina de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Três Ranchos'
        },
        {
          estado_id: '9',
          cidade: 'Trindade'
        },
        {
          estado_id: '9',
          cidade: 'Trombas'
        },
        {
          estado_id: '9',
          cidade: 'Turvânia'
        },
        {
          estado_id: '9',
          cidade: 'Turvelândia'
        },
        {
          estado_id: '9',
          cidade: 'Uirapuru'
        },
        {
          estado_id: '9',
          cidade: 'Uruaçu'
        },
        {
          estado_id: '9',
          cidade: 'Uruana'
        },
        {
          estado_id: '9',
          cidade: 'Urutaí'
        },
        {
          estado_id: '9',
          cidade: 'Valparaíso de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Varjão'
        },
        {
          estado_id: '9',
          cidade: 'Vianópolis'
        },
        {
          estado_id: '9',
          cidade: 'Vicentinópolis'
        },
        {
          estado_id: '9',
          cidade: 'Vila Boa'
        },
        {
          estado_id: '9',
          cidade: 'Vila Propício'
        },
        {
          estado_id: '9',
          cidade: 'Alexânia'
        },
        {
          estado_id: '9',
          cidade: 'Abadia de Goiás'
        },
        {
          estado_id: '9',
          cidade: 'Cristalina'
        },
        {
          estado_id: '9',
          cidade: 'Senador Canedo'
        },
        {
          estado_id: '9',
          cidade: 'Aparecida de Goiânia'
        },
        {
          estado_id: '9',
          cidade: 'Anápolis'
        },
        {
          estado_id: '9',
          cidade: 'Goiânia'
        },
        {
          estado_id: '9',
          cidade: 'Novo Gama'
        },
        {
          estado_id: '9',
          cidade: 'Rio Verde'
        },
        {
          estado_id: '10',
          cidade: 'São José de Ribamar'
        },
        {
          estado_id: '10',
          cidade: 'Rosário'
        },
        {
          estado_id: '10',
          cidade: 'Açailândia'
        },
        {
          estado_id: '10',
          cidade: 'Afonso Cunha'
        },
        {
          estado_id: '10',
          cidade: 'Água Doce do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Aldeias Altas'
        },
        {
          estado_id: '10',
          cidade: 'Altamira do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Alto Alegre do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Alto Alegre do Pindaré'
        },
        {
          estado_id: '10',
          cidade: 'Alto Parnaíba'
        },
        {
          estado_id: '10',
          cidade: 'Amapá do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Amarante do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Anajatuba'
        },
        {
          estado_id: '10',
          cidade: 'Anapurus'
        },
        {
          estado_id: '10',
          cidade: 'Apicum-Açu'
        },
        {
          estado_id: '10',
          cidade: 'Araguanã'
        },
        {
          estado_id: '10',
          cidade: 'Araioses'
        },
        {
          estado_id: '10',
          cidade: 'Arame'
        },
        {
          estado_id: '10',
          cidade: 'Arari'
        },
        {
          estado_id: '10',
          cidade: 'Axixá'
        },
        {
          estado_id: '10',
          cidade: 'Bacabal'
        },
        {
          estado_id: '10',
          cidade: 'Bacabeira'
        },
        {
          estado_id: '10',
          cidade: 'Bacuri'
        },
        {
          estado_id: '10',
          cidade: 'Bacurituba'
        },
        {
          estado_id: '10',
          cidade: 'Balsas'
        },
        {
          estado_id: '10',
          cidade: 'Barão de Grajaú'
        },
        {
          estado_id: '10',
          cidade: 'Barra do Corda'
        },
        {
          estado_id: '10',
          cidade: 'Barreirinhas'
        },
        {
          estado_id: '10',
          cidade: 'Bela Vista do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Belágua'
        },
        {
          estado_id: '10',
          cidade: 'Benedito Leite'
        },
        {
          estado_id: '10',
          cidade: 'Bequimão'
        },
        {
          estado_id: '10',
          cidade: 'Bernardo do Mearim'
        },
        {
          estado_id: '10',
          cidade: 'Boa Vista do Gurupi'
        },
        {
          estado_id: '10',
          cidade: 'Bom Jardim'
        },
        {
          estado_id: '10',
          cidade: 'Bom Jesus das Selvas'
        },
        {
          estado_id: '10',
          cidade: 'Bom Lugar'
        },
        {
          estado_id: '10',
          cidade: 'Brejo'
        },
        {
          estado_id: '10',
          cidade: 'Brejo de Areia'
        },
        {
          estado_id: '10',
          cidade: 'Buriti'
        },
        {
          estado_id: '10',
          cidade: 'Buriti Bravo'
        },
        {
          estado_id: '10',
          cidade: 'Buriticupu'
        },
        {
          estado_id: '10',
          cidade: 'Buritirana'
        },
        {
          estado_id: '10',
          cidade: 'Cachoeira Grande'
        },
        {
          estado_id: '10',
          cidade: 'Cajapió'
        },
        {
          estado_id: '10',
          cidade: 'Cajari'
        },
        {
          estado_id: '10',
          cidade: 'Campestre do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Cândido Mendes'
        },
        {
          estado_id: '10',
          cidade: 'Cantanhede'
        },
        {
          estado_id: '10',
          cidade: 'Capinzal do Norte'
        },
        {
          estado_id: '10',
          cidade: 'Carolina'
        },
        {
          estado_id: '10',
          cidade: 'Carutapera'
        },
        {
          estado_id: '10',
          cidade: 'Caxias'
        },
        {
          estado_id: '10',
          cidade: 'Cedral'
        },
        {
          estado_id: '10',
          cidade: 'Central do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Centro do Guilherme'
        },
        {
          estado_id: '10',
          cidade: 'Centro Novo do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Chapadinha'
        },
        {
          estado_id: '10',
          cidade: 'Cidelândia'
        },
        {
          estado_id: '10',
          cidade: 'Codó'
        },
        {
          estado_id: '10',
          cidade: 'Coelho Neto'
        },
        {
          estado_id: '10',
          cidade: 'Colinas'
        },
        {
          estado_id: '10',
          cidade: 'Conceição do Lago-Açu'
        },
        {
          estado_id: '10',
          cidade: 'Coroatá'
        },
        {
          estado_id: '10',
          cidade: 'Cururupu'
        },
        {
          estado_id: '10',
          cidade: 'Dom Pedro'
        },
        {
          estado_id: '10',
          cidade: 'Duque Bacelar'
        },
        {
          estado_id: '10',
          cidade: 'Esperantinópolis'
        },
        {
          estado_id: '10',
          cidade: 'Estreito'
        },
        {
          estado_id: '10',
          cidade: 'Feira Nova do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Fernando Falcão'
        },
        {
          estado_id: '10',
          cidade: 'Formosa da Serra Negra'
        },
        {
          estado_id: '10',
          cidade: 'Fortaleza dos Nogueiras'
        },
        {
          estado_id: '10',
          cidade: 'Fortuna'
        },
        {
          estado_id: '10',
          cidade: 'Godofredo Viana'
        },
        {
          estado_id: '10',
          cidade: 'Gonçalves Dias'
        },
        {
          estado_id: '10',
          cidade: 'Governador Archer'
        },
        {
          estado_id: '10',
          cidade: 'Governador Edison Lobão'
        },
        {
          estado_id: '10',
          cidade: 'Governador Eugênio Barros'
        },
        {
          estado_id: '10',
          cidade: 'Governador Luiz Rocha'
        },
        {
          estado_id: '10',
          cidade: 'Governador Newton Bello'
        },
        {
          estado_id: '10',
          cidade: 'Governador Nunes Freire'
        },
        {
          estado_id: '10',
          cidade: 'Graça Aranha'
        },
        {
          estado_id: '10',
          cidade: 'Grajaú'
        },
        {
          estado_id: '10',
          cidade: 'Guimarães'
        },
        {
          estado_id: '10',
          cidade: 'Humberto de Campos'
        },
        {
          estado_id: '10',
          cidade: 'Igarapé do Meio'
        },
        {
          estado_id: '10',
          cidade: 'Igarapé Grande'
        },
        {
          estado_id: '10',
          cidade: 'Itaipava do Grajaú'
        },
        {
          estado_id: '10',
          cidade: 'Itapecuru Mirim'
        },
        {
          estado_id: '10',
          cidade: 'Itinga do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Jatobá'
        },
        {
          estado_id: '10',
          cidade: 'Jenipapo dos Vieiras'
        },
        {
          estado_id: '10',
          cidade: 'Joselândia'
        },
        {
          estado_id: '10',
          cidade: 'Junco do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Lago da Pedra'
        },
        {
          estado_id: '10',
          cidade: 'Lago do Junco'
        },
        {
          estado_id: '10',
          cidade: 'Lago dos Rodrigues'
        },
        {
          estado_id: '10',
          cidade: 'Lago Verde'
        },
        {
          estado_id: '10',
          cidade: 'Lagoa do Mato'
        },
        {
          estado_id: '10',
          cidade: 'Lagoa Grande do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Lajeado Novo'
        },
        {
          estado_id: '10',
          cidade: 'Lima Campos'
        },
        {
          estado_id: '10',
          cidade: 'Loreto'
        },
        {
          estado_id: '10',
          cidade: 'Luís Domingues'
        },
        {
          estado_id: '10',
          cidade: 'Magalhães de Almeida'
        },
        {
          estado_id: '10',
          cidade: 'Maracaçumé'
        },
        {
          estado_id: '10',
          cidade: 'Marajá do Sena'
        },
        {
          estado_id: '10',
          cidade: 'Maranhãozinho'
        },
        {
          estado_id: '10',
          cidade: 'Mata Roma'
        },
        {
          estado_id: '10',
          cidade: 'Matinha'
        },
        {
          estado_id: '10',
          cidade: 'Matões'
        },
        {
          estado_id: '10',
          cidade: 'Matões do Norte'
        },
        {
          estado_id: '10',
          cidade: 'Milagres do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Mirador'
        },
        {
          estado_id: '10',
          cidade: 'Miranda do Norte'
        },
        {
          estado_id: '10',
          cidade: 'Mirinzal'
        },
        {
          estado_id: '10',
          cidade: 'Monção'
        },
        {
          estado_id: '10',
          cidade: 'Montes Altos'
        },
        {
          estado_id: '10',
          cidade: 'Morros'
        },
        {
          estado_id: '10',
          cidade: 'Nina Rodrigues'
        },
        {
          estado_id: '10',
          cidade: 'Nova Colinas'
        },
        {
          estado_id: '10',
          cidade: 'Nova Iorque'
        },
        {
          estado_id: '10',
          cidade: 'Nova Olinda do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Olho d Água das Cunhãs'
        },
        {
          estado_id: '10',
          cidade: 'Olinda Nova do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Palmeirândia'
        },
        {
          estado_id: '10',
          cidade: 'Paraibano'
        },
        {
          estado_id: '10',
          cidade: 'Parnarama'
        },
        {
          estado_id: '10',
          cidade: 'Passagem Franca'
        },
        {
          estado_id: '10',
          cidade: 'Pastos Bons'
        },
        {
          estado_id: '10',
          cidade: 'Paulino Neves'
        },
        {
          estado_id: '10',
          cidade: 'Paulo Ramos'
        },
        {
          estado_id: '10',
          cidade: 'Pedreiras'
        },
        {
          estado_id: '10',
          cidade: 'Pedro do Rosário'
        },
        {
          estado_id: '10',
          cidade: 'Penalva'
        },
        {
          estado_id: '10',
          cidade: 'Peri Mirim'
        },
        {
          estado_id: '10',
          cidade: 'Peritoró'
        },
        {
          estado_id: '10',
          cidade: 'Pindaré-Mirim'
        },
        {
          estado_id: '10',
          cidade: 'Pinheiro'
        },
        {
          estado_id: '10',
          cidade: 'Pio XII'
        },
        {
          estado_id: '10',
          cidade: 'Pirapemas'
        },
        {
          estado_id: '10',
          cidade: 'Poção de Pedras'
        },
        {
          estado_id: '10',
          cidade: 'Porto Franco'
        },
        {
          estado_id: '10',
          cidade: 'Porto Rico do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Presidente Dutra'
        },
        {
          estado_id: '10',
          cidade: 'Presidente Juscelino'
        },
        {
          estado_id: '10',
          cidade: 'Presidente Médici'
        },
        {
          estado_id: '10',
          cidade: 'Presidente Sarney'
        },
        {
          estado_id: '10',
          cidade: 'Presidente Vargas'
        },
        {
          estado_id: '10',
          cidade: 'Primeira Cruz'
        },
        {
          estado_id: '10',
          cidade: 'Riachão'
        },
        {
          estado_id: '10',
          cidade: 'Ribamar Fiquene'
        },
        {
          estado_id: '10',
          cidade: 'Sambaíba'
        },
        {
          estado_id: '10',
          cidade: 'Santa Filomena do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Santa Helena'
        },
        {
          estado_id: '10',
          cidade: 'Santa Inês'
        },
        {
          estado_id: '10',
          cidade: 'Santa Luzia'
        },
        {
          estado_id: '10',
          cidade: 'Santa Luzia do Paruá'
        },
        {
          estado_id: '10',
          cidade: 'Santa Quitéria do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Santa Rita'
        },
        {
          estado_id: '10',
          cidade: 'Santana do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Santo Amaro do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Santo Antônio dos Lopes'
        },
        {
          estado_id: '10',
          cidade: 'São Benedito do Rio Preto'
        },
        {
          estado_id: '10',
          cidade: 'São Bento'
        },
        {
          estado_id: '10',
          cidade: 'São Bernardo'
        },
        {
          estado_id: '10',
          cidade: 'São Domingos do Azeitão'
        },
        {
          estado_id: '10',
          cidade: 'São Domingos do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'São Félix de Balsas'
        },
        {
          estado_id: '10',
          cidade: 'São Francisco do Brejão'
        },
        {
          estado_id: '10',
          cidade: 'São Francisco do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'São João Batista'
        },
        {
          estado_id: '10',
          cidade: 'São João do Carú'
        },
        {
          estado_id: '10',
          cidade: 'São João do Paraíso'
        },
        {
          estado_id: '10',
          cidade: 'São João do Soter'
        },
        {
          estado_id: '10',
          cidade: 'São João dos Patos'
        },
        {
          estado_id: '10',
          cidade: 'São José dos Basílios'
        },
        {
          estado_id: '10',
          cidade: 'São Luís Gonzaga do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'São Mateus do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'São Pedro da Água Branca'
        },
        {
          estado_id: '10',
          cidade: 'São Pedro dos Crentes'
        },
        {
          estado_id: '10',
          cidade: 'São Raimundo das Mangabeiras'
        },
        {
          estado_id: '10',
          cidade: 'São Raimundo do Doca Bezerra'
        },
        {
          estado_id: '10',
          cidade: 'São Roberto'
        },
        {
          estado_id: '10',
          cidade: 'São Vicente Ferrer'
        },
        {
          estado_id: '10',
          cidade: 'Satubinha'
        },
        {
          estado_id: '10',
          cidade: 'Senador Alexandre Costa'
        },
        {
          estado_id: '10',
          cidade: 'Senador La Rocque'
        },
        {
          estado_id: '10',
          cidade: 'Serrano do Maranhão'
        },
        {
          estado_id: '10',
          cidade: 'Sítio Novo'
        },
        {
          estado_id: '10',
          cidade: 'Sucupira do Norte'
        },
        {
          estado_id: '10',
          cidade: 'Sucupira do Riachão'
        },
        {
          estado_id: '10',
          cidade: 'Tasso Fragoso'
        },
        {
          estado_id: '10',
          cidade: 'Timbiras'
        },
        {
          estado_id: '10',
          cidade: 'Trizidela do Vale'
        },
        {
          estado_id: '10',
          cidade: 'Tufilândia'
        },
        {
          estado_id: '10',
          cidade: 'Tuntum'
        },
        {
          estado_id: '10',
          cidade: 'Turiaçu'
        },
        {
          estado_id: '10',
          cidade: 'Turilândia'
        },
        {
          estado_id: '10',
          cidade: 'Tutóia'
        },
        {
          estado_id: '10',
          cidade: 'Urbano Santos'
        },
        {
          estado_id: '10',
          cidade: 'Vargem Grande'
        },
        {
          estado_id: '10',
          cidade: 'Viana'
        },
        {
          estado_id: '10',
          cidade: 'Vila Nova dos Martírios'
        },
        {
          estado_id: '10',
          cidade: 'Vitória do Mearim'
        },
        {
          estado_id: '10',
          cidade: 'Vitorino Freire'
        },
        {
          estado_id: '10',
          cidade: 'Zé Doca'
        },
        {
          estado_id: '10',
          cidade: 'Raposa'
        },
        {
          estado_id: '10',
          cidade: 'João Lisboa'
        },
        {
          estado_id: '10',
          cidade: 'Icatu'
        },
        {
          estado_id: '10',
          cidade: 'Alcântara'
        },
        {
          estado_id: '10',
          cidade: 'Paço do Lumiar'
        },
        {
          estado_id: '10',
          cidade: 'São Luís'
        },
        {
          estado_id: '10',
          cidade: 'Imperatriz'
        },
        {
          estado_id: '10',
          cidade: 'Timon'
        },
        {
          estado_id: '10',
          cidade: 'Davinópolis'
        },
        {
          estado_id: '11',
          cidade: 'Extrema'
        },
        {
          estado_id: '11',
          cidade: 'Jacutinga'
        },
        {
          estado_id: '11',
          cidade: 'Igaratinga'
        },
        {
          estado_id: '11',
          cidade: 'Conceição do Pará'
        },
        {
          estado_id: '11',
          cidade: 'Capim Branco'
        },
        {
          estado_id: '11',
          cidade: 'Claraval'
        },
        {
          estado_id: '11',
          cidade: 'Jaboticatubas'
        },
        {
          estado_id: '11',
          cidade: 'Juatuba'
        },
        {
          estado_id: '11',
          cidade: 'Pitangui'
        },
        {
          estado_id: '11',
          cidade: 'Cristiano Otoni'
        },
        {
          estado_id: '11',
          cidade: 'Ouro Branco'
        },
        {
          estado_id: '11',
          cidade: 'Jeceaba'
        },
        {
          estado_id: '11',
          cidade: 'Córrego Novo'
        },
        {
          estado_id: '11',
          cidade: 'Bonfim'
        },
        {
          estado_id: '11',
          cidade: 'São Bento Abade'
        },
        {
          estado_id: '11',
          cidade: 'São Brás do Suaçuí'
        },
        {
          estado_id: '11',
          cidade: 'Abadia dos Dourados'
        },
        {
          estado_id: '11',
          cidade: 'Abaeté'
        },
        {
          estado_id: '11',
          cidade: 'Abre Campo'
        },
        {
          estado_id: '11',
          cidade: 'Acaiaca'
        },
        {
          estado_id: '11',
          cidade: 'Açucena'
        },
        {
          estado_id: '11',
          cidade: 'Água Boa'
        },
        {
          estado_id: '11',
          cidade: 'Água Comprida'
        },
        {
          estado_id: '11',
          cidade: 'Aguanil'
        },
        {
          estado_id: '11',
          cidade: 'Águas Formosas'
        },
        {
          estado_id: '11',
          cidade: 'Águas Vermelhas'
        },
        {
          estado_id: '11',
          cidade: 'Aimorés'
        },
        {
          estado_id: '11',
          cidade: 'Aiuruoca'
        },
        {
          estado_id: '11',
          cidade: 'Alagoa'
        },
        {
          estado_id: '11',
          cidade: 'Albertina'
        },
        {
          estado_id: '11',
          cidade: 'Além Paraíba'
        },
        {
          estado_id: '11',
          cidade: 'Alfenas'
        },
        {
          estado_id: '11',
          cidade: 'Alfredo Vasconcelos'
        },
        {
          estado_id: '11',
          cidade: 'Almenara'
        },
        {
          estado_id: '11',
          cidade: 'Alpercata'
        },
        {
          estado_id: '11',
          cidade: 'Alpinópolis'
        },
        {
          estado_id: '11',
          cidade: 'Alterosa'
        },
        {
          estado_id: '11',
          cidade: 'Alto Caparaó'
        },
        {
          estado_id: '11',
          cidade: 'Alto Jequitibá'
        },
        {
          estado_id: '11',
          cidade: 'Alto Rio Doce'
        },
        {
          estado_id: '11',
          cidade: 'Alvarenga'
        },
        {
          estado_id: '11',
          cidade: 'Alvinópolis'
        },
        {
          estado_id: '11',
          cidade: 'Alvorada de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Amparo do Serra'
        },
        {
          estado_id: '11',
          cidade: 'Andradas'
        },
        {
          estado_id: '11',
          cidade: 'Andrelândia'
        },
        {
          estado_id: '11',
          cidade: 'Angelândia'
        },
        {
          estado_id: '11',
          cidade: 'Antônio Carlos'
        },
        {
          estado_id: '11',
          cidade: 'Antônio Dias'
        },
        {
          estado_id: '11',
          cidade: 'Antônio Prado de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Araçaí'
        },
        {
          estado_id: '11',
          cidade: 'Aracitaba'
        },
        {
          estado_id: '11',
          cidade: 'Araçuaí'
        },
        {
          estado_id: '11',
          cidade: 'Araguari'
        },
        {
          estado_id: '11',
          cidade: 'Arantina'
        },
        {
          estado_id: '11',
          cidade: 'Araponga'
        },
        {
          estado_id: '11',
          cidade: 'Araporã'
        },
        {
          estado_id: '11',
          cidade: 'Arapuá'
        },
        {
          estado_id: '11',
          cidade: 'Araújos'
        },
        {
          estado_id: '11',
          cidade: 'Araxá'
        },
        {
          estado_id: '11',
          cidade: 'Arceburgo'
        },
        {
          estado_id: '11',
          cidade: 'Arcos'
        },
        {
          estado_id: '11',
          cidade: 'Areado'
        },
        {
          estado_id: '11',
          cidade: 'Argirita'
        },
        {
          estado_id: '11',
          cidade: 'Aricanduva'
        },
        {
          estado_id: '11',
          cidade: 'Arinos'
        },
        {
          estado_id: '11',
          cidade: 'Astolfo Dutra'
        },
        {
          estado_id: '11',
          cidade: 'Ataléia'
        },
        {
          estado_id: '11',
          cidade: 'Augusto de Lima'
        },
        {
          estado_id: '11',
          cidade: 'Baependi'
        },
        {
          estado_id: '11',
          cidade: 'Baldim'
        },
        {
          estado_id: '11',
          cidade: 'Bambuí'
        },
        {
          estado_id: '11',
          cidade: 'Bandeira'
        },
        {
          estado_id: '11',
          cidade: 'Bandeira do Sul'
        },
        {
          estado_id: '11',
          cidade: 'Barão de Cocais'
        },
        {
          estado_id: '11',
          cidade: 'Barão de Monte Alto'
        },
        {
          estado_id: '11',
          cidade: 'Barbacena'
        },
        {
          estado_id: '11',
          cidade: 'Barra Longa'
        },
        {
          estado_id: '11',
          cidade: 'Barroso'
        },
        {
          estado_id: '11',
          cidade: 'Bela Vista de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Belmiro Braga'
        },
        {
          estado_id: '11',
          cidade: 'Belo Oriente'
        },
        {
          estado_id: '11',
          cidade: 'Belo Vale'
        },
        {
          estado_id: '11',
          cidade: 'Berilo'
        },
        {
          estado_id: '11',
          cidade: 'Berizal'
        },
        {
          estado_id: '11',
          cidade: 'Bertópolis'
        },
        {
          estado_id: '11',
          cidade: 'Bias Fortes'
        },
        {
          estado_id: '11',
          cidade: 'Bicas'
        },
        {
          estado_id: '11',
          cidade: 'Biquinhas'
        },
        {
          estado_id: '11',
          cidade: 'Boa Esperança'
        },
        {
          estado_id: '11',
          cidade: 'Bocaina de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Bocaiúva'
        },
        {
          estado_id: '11',
          cidade: 'Bom Despacho'
        },
        {
          estado_id: '11',
          cidade: 'Bom Jardim de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Bom Jesus da Penha'
        },
        {
          estado_id: '11',
          cidade: 'Bom Jesus do Amparo'
        },
        {
          estado_id: '11',
          cidade: 'Bom Jesus do Galho'
        },
        {
          estado_id: '11',
          cidade: 'Bom Repouso'
        },
        {
          estado_id: '11',
          cidade: 'Bom Sucesso'
        },
        {
          estado_id: '11',
          cidade: 'Bonfinópolis de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Bonito de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Borda da Mata'
        },
        {
          estado_id: '11',
          cidade: 'Botelhos'
        },
        {
          estado_id: '11',
          cidade: 'Botumirim'
        },
        {
          estado_id: '11',
          cidade: 'Brás Pires'
        },
        {
          estado_id: '11',
          cidade: 'Brasilândia de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Brasília de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Braúnas'
        },
        {
          estado_id: '11',
          cidade: 'Brazópolis'
        },
        {
          estado_id: '11',
          cidade: 'Brumadinho'
        },
        {
          estado_id: '11',
          cidade: 'Bueno Brandão'
        },
        {
          estado_id: '11',
          cidade: 'Buenópolis'
        },
        {
          estado_id: '11',
          cidade: 'Bugre'
        },
        {
          estado_id: '11',
          cidade: 'Buritis'
        },
        {
          estado_id: '11',
          cidade: 'Buritizeiro'
        },
        {
          estado_id: '11',
          cidade: 'Cabeceira Grande'
        },
        {
          estado_id: '11',
          cidade: 'Cabo Verde'
        },
        {
          estado_id: '11',
          cidade: 'Cachoeira da Prata'
        },
        {
          estado_id: '11',
          cidade: 'Cachoeira de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Cachoeira de Pajeú'
        },
        {
          estado_id: '11',
          cidade: 'Cachoeira Dourada'
        },
        {
          estado_id: '11',
          cidade: 'Caetanópolis'
        },
        {
          estado_id: '11',
          cidade: 'Caeté'
        },
        {
          estado_id: '11',
          cidade: 'Caiana'
        },
        {
          estado_id: '11',
          cidade: 'Cajuri'
        },
        {
          estado_id: '11',
          cidade: 'Caldas'
        },
        {
          estado_id: '11',
          cidade: 'Camacho'
        },
        {
          estado_id: '11',
          cidade: 'Cambuí'
        },
        {
          estado_id: '11',
          cidade: 'Cambuquira'
        },
        {
          estado_id: '11',
          cidade: 'Campanário'
        },
        {
          estado_id: '11',
          cidade: 'Campanha'
        },
        {
          estado_id: '11',
          cidade: 'Campestre'
        },
        {
          estado_id: '11',
          cidade: 'Campina Verde'
        },
        {
          estado_id: '11',
          cidade: 'Campo Azul'
        },
        {
          estado_id: '11',
          cidade: 'Campo Belo'
        },
        {
          estado_id: '11',
          cidade: 'Campo do Meio'
        },
        {
          estado_id: '11',
          cidade: 'Campo Florido'
        },
        {
          estado_id: '11',
          cidade: 'Campos Altos'
        },
        {
          estado_id: '11',
          cidade: 'Campos Gerais'
        },
        {
          estado_id: '11',
          cidade: 'Cana Verde'
        },
        {
          estado_id: '11',
          cidade: 'Canaã'
        },
        {
          estado_id: '11',
          cidade: 'Canápolis'
        },
        {
          estado_id: '11',
          cidade: 'Candeias'
        },
        {
          estado_id: '11',
          cidade: 'Cantagalo'
        },
        {
          estado_id: '11',
          cidade: 'Caparaó'
        },
        {
          estado_id: '11',
          cidade: 'Capela Nova'
        },
        {
          estado_id: '11',
          cidade: 'Capelinha'
        },
        {
          estado_id: '11',
          cidade: 'Capetinga'
        },
        {
          estado_id: '11',
          cidade: 'Capinópolis'
        },
        {
          estado_id: '11',
          cidade: 'Capitão Andrade'
        },
        {
          estado_id: '11',
          cidade: 'Capitão Enéas'
        },
        {
          estado_id: '11',
          cidade: 'Capitólio'
        },
        {
          estado_id: '11',
          cidade: 'Caputira'
        },
        {
          estado_id: '11',
          cidade: 'Caraí'
        },
        {
          estado_id: '11',
          cidade: 'Caranaíba'
        },
        {
          estado_id: '11',
          cidade: 'Carandaí'
        },
        {
          estado_id: '11',
          cidade: 'Carangola'
        },
        {
          estado_id: '11',
          cidade: 'Caratinga'
        },
        {
          estado_id: '11',
          cidade: 'Carbonita'
        },
        {
          estado_id: '11',
          cidade: 'Careaçu'
        },
        {
          estado_id: '11',
          cidade: 'Carlos Chagas'
        },
        {
          estado_id: '11',
          cidade: 'Carmésia'
        },
        {
          estado_id: '11',
          cidade: 'Carmo da Cachoeira'
        },
        {
          estado_id: '11',
          cidade: 'Carmo da Mata'
        },
        {
          estado_id: '11',
          cidade: 'Carmo de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Carmo do Paranaíba'
        },
        {
          estado_id: '11',
          cidade: 'Carmo do Rio Claro'
        },
        {
          estado_id: '11',
          cidade: 'Carmópolis de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Carneirinho'
        },
        {
          estado_id: '11',
          cidade: 'Carrancas'
        },
        {
          estado_id: '11',
          cidade: 'Carvalhópolis'
        },
        {
          estado_id: '11',
          cidade: 'Carvalhos'
        },
        {
          estado_id: '11',
          cidade: 'Casa Grande'
        },
        {
          estado_id: '11',
          cidade: 'Cascalho Rico'
        },
        {
          estado_id: '11',
          cidade: 'Cássia'
        },
        {
          estado_id: '11',
          cidade: 'Cataguases'
        },
        {
          estado_id: '11',
          cidade: 'Catas Altas'
        },
        {
          estado_id: '11',
          cidade: 'Catas Altas da Noruega'
        },
        {
          estado_id: '11',
          cidade: 'Catuji'
        },
        {
          estado_id: '11',
          cidade: 'Catuti'
        },
        {
          estado_id: '11',
          cidade: 'Caxambu'
        },
        {
          estado_id: '11',
          cidade: 'Cedro do Abaeté'
        },
        {
          estado_id: '11',
          cidade: 'Central de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Centralina'
        },
        {
          estado_id: '11',
          cidade: 'Chácara'
        },
        {
          estado_id: '11',
          cidade: 'Chalé'
        },
        {
          estado_id: '11',
          cidade: 'Chapada do Norte'
        },
        {
          estado_id: '11',
          cidade: 'Chapada Gaúcha'
        },
        {
          estado_id: '11',
          cidade: 'Chiador'
        },
        {
          estado_id: '11',
          cidade: 'Cipotânea'
        },
        {
          estado_id: '11',
          cidade: 'Claro dos Poções'
        },
        {
          estado_id: '11',
          cidade: 'Cláudio'
        },
        {
          estado_id: '11',
          cidade: 'Coimbra'
        },
        {
          estado_id: '11',
          cidade: 'Coluna'
        },
        {
          estado_id: '11',
          cidade: 'Comendador Gomes'
        },
        {
          estado_id: '11',
          cidade: 'Comercinho'
        },
        {
          estado_id: '11',
          cidade: 'Conceição da Aparecida'
        },
        {
          estado_id: '11',
          cidade: 'Conceição da Barra de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Conceição das Alagoas'
        },
        {
          estado_id: '11',
          cidade: 'Conceição das Pedras'
        },
        {
          estado_id: '11',
          cidade: 'Conceição de Ipanema'
        },
        {
          estado_id: '11',
          cidade: 'Conceição do Mato Dentro'
        },
        {
          estado_id: '11',
          cidade: 'Conceição do Rio Verde'
        },
        {
          estado_id: '11',
          cidade: 'Conceição dos Ouros'
        },
        {
          estado_id: '11',
          cidade: 'Cônego Marinho'
        },
        {
          estado_id: '11',
          cidade: 'Confins'
        },
        {
          estado_id: '11',
          cidade: 'Congonhal'
        },
        {
          estado_id: '11',
          cidade: 'Congonhas'
        },
        {
          estado_id: '11',
          cidade: 'Congonhas do Norte'
        },
        {
          estado_id: '11',
          cidade: 'Conquista'
        },
        {
          estado_id: '11',
          cidade: 'Conselheiro Pena'
        },
        {
          estado_id: '11',
          cidade: 'Consolação'
        },
        {
          estado_id: '11',
          cidade: 'Coqueiral'
        },
        {
          estado_id: '11',
          cidade: 'Coração de Jesus'
        },
        {
          estado_id: '11',
          cidade: 'Cordisburgo'
        },
        {
          estado_id: '11',
          cidade: 'Cordislândia'
        },
        {
          estado_id: '11',
          cidade: 'Corinto'
        },
        {
          estado_id: '11',
          cidade: 'Coroaci'
        },
        {
          estado_id: '11',
          cidade: 'Coromandel'
        },
        {
          estado_id: '11',
          cidade: 'Coronel Fabriciano'
        },
        {
          estado_id: '11',
          cidade: 'Coronel Murta'
        },
        {
          estado_id: '11',
          cidade: 'Coronel Pacheco'
        },
        {
          estado_id: '11',
          cidade: 'Coronel Xavier Chaves'
        },
        {
          estado_id: '11',
          cidade: 'Córrego Danta'
        },
        {
          estado_id: '11',
          cidade: 'Córrego do Bom Jesus'
        },
        {
          estado_id: '11',
          cidade: 'Córrego Fundo'
        },
        {
          estado_id: '11',
          cidade: 'Couto de Magalhães de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Crisólita'
        },
        {
          estado_id: '11',
          cidade: 'Cristais'
        },
        {
          estado_id: '11',
          cidade: 'Cristália'
        },
        {
          estado_id: '11',
          cidade: 'Cristina'
        },
        {
          estado_id: '11',
          cidade: 'Crucilândia'
        },
        {
          estado_id: '11',
          cidade: 'Cruzeiro da Fortaleza'
        },
        {
          estado_id: '11',
          cidade: 'Cruzília'
        },
        {
          estado_id: '11',
          cidade: 'Cuparaque'
        },
        {
          estado_id: '11',
          cidade: 'Curral de Dentro'
        },
        {
          estado_id: '11',
          cidade: 'Curvelo'
        },
        {
          estado_id: '11',
          cidade: 'Datas'
        },
        {
          estado_id: '11',
          cidade: 'Delfim Moreira'
        },
        {
          estado_id: '11',
          cidade: 'Delfinópolis'
        },
        {
          estado_id: '11',
          cidade: 'Descoberto'
        },
        {
          estado_id: '11',
          cidade: 'Desterro de Entre Rios'
        },
        {
          estado_id: '11',
          cidade: 'Desterro do Melo'
        },
        {
          estado_id: '11',
          cidade: 'Diamantina'
        },
        {
          estado_id: '11',
          cidade: 'Diogo de Vasconcelos'
        },
        {
          estado_id: '11',
          cidade: 'Dionísio'
        },
        {
          estado_id: '11',
          cidade: 'Divinésia'
        },
        {
          estado_id: '11',
          cidade: 'Divino'
        },
        {
          estado_id: '11',
          cidade: 'Divino das Laranjeiras'
        },
        {
          estado_id: '11',
          cidade: 'Divinolândia de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Divisa Alegre'
        },
        {
          estado_id: '11',
          cidade: 'Divisa Nova'
        },
        {
          estado_id: '11',
          cidade: 'Divisópolis'
        },
        {
          estado_id: '11',
          cidade: 'Dom Bosco'
        },
        {
          estado_id: '11',
          cidade: 'Dom Cavati'
        },
        {
          estado_id: '11',
          cidade: 'Dom Joaquim'
        },
        {
          estado_id: '11',
          cidade: 'Dom Silvério'
        },
        {
          estado_id: '11',
          cidade: 'Dom Viçoso'
        },
        {
          estado_id: '11',
          cidade: 'Dona Eusébia'
        },
        {
          estado_id: '11',
          cidade: 'Dores de Campos'
        },
        {
          estado_id: '11',
          cidade: 'Dores de Guanhães'
        },
        {
          estado_id: '11',
          cidade: 'Dores do Indaiá'
        },
        {
          estado_id: '11',
          cidade: 'Dores do Turvo'
        },
        {
          estado_id: '11',
          cidade: 'Doresópolis'
        },
        {
          estado_id: '11',
          cidade: 'Douradoquara'
        },
        {
          estado_id: '11',
          cidade: 'Durandé'
        },
        {
          estado_id: '11',
          cidade: 'Elói Mendes'
        },
        {
          estado_id: '11',
          cidade: 'Engenheiro Caldas'
        },
        {
          estado_id: '11',
          cidade: 'Engenheiro Navarro'
        },
        {
          estado_id: '11',
          cidade: 'Entre Folhas'
        },
        {
          estado_id: '11',
          cidade: 'Entre Rios de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Ervália'
        },
        {
          estado_id: '11',
          cidade: 'Esmeraldas'
        },
        {
          estado_id: '11',
          cidade: 'Espera Feliz'
        },
        {
          estado_id: '11',
          cidade: 'Espinosa'
        },
        {
          estado_id: '11',
          cidade: 'Espírito Santo do Dourado'
        },
        {
          estado_id: '11',
          cidade: 'Estiva'
        },
        {
          estado_id: '11',
          cidade: 'Estrela Dalva'
        },
        {
          estado_id: '11',
          cidade: 'Estrela do Indaiá'
        },
        {
          estado_id: '11',
          cidade: 'Estrela do Sul'
        },
        {
          estado_id: '11',
          cidade: 'Eugenópolis'
        },
        {
          estado_id: '11',
          cidade: 'Ewbank da Câmara'
        },
        {
          estado_id: '11',
          cidade: 'Fama'
        },
        {
          estado_id: '11',
          cidade: 'Faria Lemos'
        },
        {
          estado_id: '11',
          cidade: 'Felício dos Santos'
        },
        {
          estado_id: '11',
          cidade: 'Felisburgo'
        },
        {
          estado_id: '11',
          cidade: 'Felixlândia'
        },
        {
          estado_id: '11',
          cidade: 'Fernandes Tourinho'
        },
        {
          estado_id: '11',
          cidade: 'Ferros'
        },
        {
          estado_id: '11',
          cidade: 'Fervedouro'
        },
        {
          estado_id: '11',
          cidade: 'Florestal'
        },
        {
          estado_id: '11',
          cidade: 'Formiga'
        },
        {
          estado_id: '11',
          cidade: 'Formoso'
        },
        {
          estado_id: '11',
          cidade: 'Fortaleza de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Fortuna de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Francisco Badaró'
        },
        {
          estado_id: '11',
          cidade: 'Francisco Dumont'
        },
        {
          estado_id: '11',
          cidade: 'Francisco Sá'
        },
        {
          estado_id: '11',
          cidade: 'Franciscópolis'
        },
        {
          estado_id: '11',
          cidade: 'Frei Gaspar'
        },
        {
          estado_id: '11',
          cidade: 'Frei Inocêncio'
        },
        {
          estado_id: '11',
          cidade: 'Frei Lagonegro'
        },
        {
          estado_id: '11',
          cidade: 'Fronteira'
        },
        {
          estado_id: '11',
          cidade: 'Fronteira dos Vales'
        },
        {
          estado_id: '11',
          cidade: 'Fruta de Leite'
        },
        {
          estado_id: '11',
          cidade: 'Frutal'
        },
        {
          estado_id: '11',
          cidade: 'Funilândia'
        },
        {
          estado_id: '11',
          cidade: 'Galiléia'
        },
        {
          estado_id: '11',
          cidade: 'Gameleiras'
        },
        {
          estado_id: '11',
          cidade: 'Goiabeira'
        },
        {
          estado_id: '11',
          cidade: 'Goianá'
        },
        {
          estado_id: '11',
          cidade: 'Gonçalves'
        },
        {
          estado_id: '11',
          cidade: 'Gonzaga'
        },
        {
          estado_id: '11',
          cidade: 'Gouveia'
        },
        {
          estado_id: '11',
          cidade: 'Grão Mogol'
        },
        {
          estado_id: '11',
          cidade: 'Grupiara'
        },
        {
          estado_id: '11',
          cidade: 'Guanhães'
        },
        {
          estado_id: '11',
          cidade: 'Guapé'
        },
        {
          estado_id: '11',
          cidade: 'Guaraciaba'
        },
        {
          estado_id: '11',
          cidade: 'Guaraciama'
        },
        {
          estado_id: '11',
          cidade: 'Guaranésia'
        },
        {
          estado_id: '11',
          cidade: 'Guarani'
        },
        {
          estado_id: '11',
          cidade: 'Guarará'
        },
        {
          estado_id: '11',
          cidade: 'Guarda-Mor'
        },
        {
          estado_id: '11',
          cidade: 'Guaxupé'
        },
        {
          estado_id: '11',
          cidade: 'Guidoval'
        },
        {
          estado_id: '11',
          cidade: 'Guimarânia'
        },
        {
          estado_id: '11',
          cidade: 'Guiricema'
        },
        {
          estado_id: '11',
          cidade: 'Gurinhatã'
        },
        {
          estado_id: '11',
          cidade: 'Heliodora'
        },
        {
          estado_id: '11',
          cidade: 'Iapu'
        },
        {
          estado_id: '11',
          cidade: 'Ibertioga'
        },
        {
          estado_id: '11',
          cidade: 'Ibiá'
        },
        {
          estado_id: '11',
          cidade: 'Ibiaí'
        },
        {
          estado_id: '11',
          cidade: 'Ibiracatu'
        },
        {
          estado_id: '11',
          cidade: 'Ibiraci'
        },
        {
          estado_id: '11',
          cidade: 'Ibitiúra de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Ibituruna'
        },
        {
          estado_id: '11',
          cidade: 'Icaraí de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Iguatama'
        },
        {
          estado_id: '11',
          cidade: 'Ijaci'
        },
        {
          estado_id: '11',
          cidade: 'Ilicínea'
        },
        {
          estado_id: '11',
          cidade: 'Imbé de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Inconfidentes'
        },
        {
          estado_id: '11',
          cidade: 'Indaiabira'
        },
        {
          estado_id: '11',
          cidade: 'Indianópolis'
        },
        {
          estado_id: '11',
          cidade: 'Ingaí'
        },
        {
          estado_id: '11',
          cidade: 'Inhapim'
        },
        {
          estado_id: '11',
          cidade: 'Inhaúma'
        },
        {
          estado_id: '11',
          cidade: 'Inimutaba'
        },
        {
          estado_id: '11',
          cidade: 'Ipaba'
        },
        {
          estado_id: '11',
          cidade: 'Ipanema'
        },
        {
          estado_id: '11',
          cidade: 'Ipiaçu'
        },
        {
          estado_id: '11',
          cidade: 'Ipuiúna'
        },
        {
          estado_id: '11',
          cidade: 'Iraí de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Itabira'
        },
        {
          estado_id: '11',
          cidade: 'Itabirinha'
        },
        {
          estado_id: '11',
          cidade: 'Itabirito'
        },
        {
          estado_id: '11',
          cidade: 'Itacambira'
        },
        {
          estado_id: '11',
          cidade: 'Itacarambi'
        },
        {
          estado_id: '11',
          cidade: 'Itaguara'
        },
        {
          estado_id: '11',
          cidade: 'Itaipé'
        },
        {
          estado_id: '11',
          cidade: 'Itamarandiba'
        },
        {
          estado_id: '11',
          cidade: 'Itamarati de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Itambacuri'
        },
        {
          estado_id: '11',
          cidade: 'Itambé do Mato Dentro'
        },
        {
          estado_id: '11',
          cidade: 'Itamogi'
        },
        {
          estado_id: '11',
          cidade: 'Itamonte'
        },
        {
          estado_id: '11',
          cidade: 'Itanhandu'
        },
        {
          estado_id: '11',
          cidade: 'Itanhomi'
        },
        {
          estado_id: '11',
          cidade: 'Itaobim'
        },
        {
          estado_id: '11',
          cidade: 'Itapagipe'
        },
        {
          estado_id: '11',
          cidade: 'Itapecerica'
        },
        {
          estado_id: '11',
          cidade: 'Itapeva'
        },
        {
          estado_id: '11',
          cidade: 'Itatiaiuçu'
        },
        {
          estado_id: '11',
          cidade: 'Itaú de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Itaúna'
        },
        {
          estado_id: '11',
          cidade: 'Itaverava'
        },
        {
          estado_id: '11',
          cidade: 'Itinga'
        },
        {
          estado_id: '11',
          cidade: 'Itueta'
        },
        {
          estado_id: '11',
          cidade: 'Ituiutaba'
        },
        {
          estado_id: '11',
          cidade: 'Itumirim'
        },
        {
          estado_id: '11',
          cidade: 'Iturama'
        },
        {
          estado_id: '11',
          cidade: 'Itutinga'
        },
        {
          estado_id: '11',
          cidade: 'Jacinto'
        },
        {
          estado_id: '11',
          cidade: 'Jacuí'
        },
        {
          estado_id: '11',
          cidade: 'Jaguaraçu'
        },
        {
          estado_id: '11',
          cidade: 'Jaíba'
        },
        {
          estado_id: '11',
          cidade: 'Jampruca'
        },
        {
          estado_id: '11',
          cidade: 'Janaúba'
        },
        {
          estado_id: '11',
          cidade: 'Januária'
        },
        {
          estado_id: '11',
          cidade: 'Japaraíba'
        },
        {
          estado_id: '11',
          cidade: 'Japonvar'
        },
        {
          estado_id: '11',
          cidade: 'Jenipapo de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Jequeri'
        },
        {
          estado_id: '11',
          cidade: 'Jequitaí'
        },
        {
          estado_id: '11',
          cidade: 'Jequitibá'
        },
        {
          estado_id: '11',
          cidade: 'Jequitinhonha'
        },
        {
          estado_id: '11',
          cidade: 'Jesuânia'
        },
        {
          estado_id: '11',
          cidade: 'Joaíma'
        },
        {
          estado_id: '11',
          cidade: 'Joanésia'
        },
        {
          estado_id: '11',
          cidade: 'João Monlevade'
        },
        {
          estado_id: '11',
          cidade: 'João Pinheiro'
        },
        {
          estado_id: '11',
          cidade: 'Joaquim Felício'
        },
        {
          estado_id: '11',
          cidade: 'Jordânia'
        },
        {
          estado_id: '11',
          cidade: 'José Gonçalves de Minas'
        },
        {
          estado_id: '11',
          cidade: 'José Raydan'
        },
        {
          estado_id: '11',
          cidade: 'Josenópolis'
        },
        {
          estado_id: '11',
          cidade: 'Juramento'
        },
        {
          estado_id: '11',
          cidade: 'Juruaia'
        },
        {
          estado_id: '11',
          cidade: 'Juvenília'
        },
        {
          estado_id: '11',
          cidade: 'Ladainha'
        },
        {
          estado_id: '11',
          cidade: 'Lagamar'
        },
        {
          estado_id: '11',
          cidade: 'Lagoa da Prata'
        },
        {
          estado_id: '11',
          cidade: 'Lagoa dos Patos'
        },
        {
          estado_id: '11',
          cidade: 'Lagoa Dourada'
        },
        {
          estado_id: '11',
          cidade: 'Lagoa Formosa'
        },
        {
          estado_id: '11',
          cidade: 'Lagoa Grande'
        },
        {
          estado_id: '11',
          cidade: 'Lajinha'
        },
        {
          estado_id: '11',
          cidade: 'Lambari'
        },
        {
          estado_id: '11',
          cidade: 'Lamim'
        },
        {
          estado_id: '11',
          cidade: 'Laranjal'
        },
        {
          estado_id: '11',
          cidade: 'Lassance'
        },
        {
          estado_id: '11',
          cidade: 'Lavras'
        },
        {
          estado_id: '11',
          cidade: 'Leandro Ferreira'
        },
        {
          estado_id: '11',
          cidade: 'Leme do Prado'
        },
        {
          estado_id: '11',
          cidade: 'Leopoldina'
        },
        {
          estado_id: '11',
          cidade: 'Liberdade'
        },
        {
          estado_id: '11',
          cidade: 'Lima Duarte'
        },
        {
          estado_id: '11',
          cidade: 'Limeira do Oeste'
        },
        {
          estado_id: '11',
          cidade: 'Lontra'
        },
        {
          estado_id: '11',
          cidade: 'Luisburgo'
        },
        {
          estado_id: '11',
          cidade: 'Luislândia'
        },
        {
          estado_id: '11',
          cidade: 'Luminárias'
        },
        {
          estado_id: '11',
          cidade: 'Luz'
        },
        {
          estado_id: '11',
          cidade: 'Machacalis'
        },
        {
          estado_id: '11',
          cidade: 'Machado'
        },
        {
          estado_id: '11',
          cidade: 'Madre de Deus de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Malacacheta'
        },
        {
          estado_id: '11',
          cidade: 'Mamonas'
        },
        {
          estado_id: '11',
          cidade: 'Manga'
        },
        {
          estado_id: '11',
          cidade: 'Manhuaçu'
        },
        {
          estado_id: '11',
          cidade: 'Manhumirim'
        },
        {
          estado_id: '11',
          cidade: 'Mantena'
        },
        {
          estado_id: '11',
          cidade: 'Mar de Espanha'
        },
        {
          estado_id: '11',
          cidade: 'Maravilhas'
        },
        {
          estado_id: '11',
          cidade: 'Maria da Fé'
        },
        {
          estado_id: '11',
          cidade: 'Mariana'
        },
        {
          estado_id: '11',
          cidade: 'Marilac'
        },
        {
          estado_id: '11',
          cidade: 'Maripá de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Marliéria'
        },
        {
          estado_id: '11',
          cidade: 'Marmelópolis'
        },
        {
          estado_id: '11',
          cidade: 'Martinho Campos'
        },
        {
          estado_id: '11',
          cidade: 'Martins Soares'
        },
        {
          estado_id: '11',
          cidade: 'Mata Verde'
        },
        {
          estado_id: '11',
          cidade: 'Materlândia'
        },
        {
          estado_id: '11',
          cidade: 'Mathias Lobato'
        },
        {
          estado_id: '11',
          cidade: 'Matias Barbosa'
        },
        {
          estado_id: '11',
          cidade: 'Matias Cardoso'
        },
        {
          estado_id: '11',
          cidade: 'Matipó'
        },
        {
          estado_id: '11',
          cidade: 'Mato Verde'
        },
        {
          estado_id: '11',
          cidade: 'Matutina'
        },
        {
          estado_id: '11',
          cidade: 'Medeiros'
        },
        {
          estado_id: '11',
          cidade: 'Medina'
        },
        {
          estado_id: '11',
          cidade: 'Mendes Pimentel'
        },
        {
          estado_id: '11',
          cidade: 'Mercês'
        },
        {
          estado_id: '11',
          cidade: 'Mesquita'
        },
        {
          estado_id: '11',
          cidade: 'Minas Novas'
        },
        {
          estado_id: '11',
          cidade: 'Minduri'
        },
        {
          estado_id: '11',
          cidade: 'Mirabela'
        },
        {
          estado_id: '11',
          cidade: 'Miradouro'
        },
        {
          estado_id: '11',
          cidade: 'Miraí'
        },
        {
          estado_id: '11',
          cidade: 'Miravânia'
        },
        {
          estado_id: '11',
          cidade: 'Moeda'
        },
        {
          estado_id: '11',
          cidade: 'Moema'
        },
        {
          estado_id: '11',
          cidade: 'Monjolos'
        },
        {
          estado_id: '11',
          cidade: 'Monsenhor Paulo'
        },
        {
          estado_id: '11',
          cidade: 'Montalvânia'
        },
        {
          estado_id: '11',
          cidade: 'Monte Alegre de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Monte Azul'
        },
        {
          estado_id: '11',
          cidade: 'Monte Belo'
        },
        {
          estado_id: '11',
          cidade: 'Monte Carmelo'
        },
        {
          estado_id: '11',
          cidade: 'Monte Formoso'
        },
        {
          estado_id: '11',
          cidade: 'Monte Santo de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Monte Sião'
        },
        {
          estado_id: '11',
          cidade: 'Montezuma'
        },
        {
          estado_id: '11',
          cidade: 'Morada Nova de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Morro da Garça'
        },
        {
          estado_id: '11',
          cidade: 'Morro do Pilar'
        },
        {
          estado_id: '11',
          cidade: 'Munhoz'
        },
        {
          estado_id: '11',
          cidade: 'Muriaé'
        },
        {
          estado_id: '11',
          cidade: 'Mutum'
        },
        {
          estado_id: '11',
          cidade: 'Muzambinho'
        },
        {
          estado_id: '11',
          cidade: 'Nacip Raydan'
        },
        {
          estado_id: '11',
          cidade: 'Nanuque'
        },
        {
          estado_id: '11',
          cidade: 'Naque'
        },
        {
          estado_id: '11',
          cidade: 'Natalândia'
        },
        {
          estado_id: '11',
          cidade: 'Natércia'
        },
        {
          estado_id: '11',
          cidade: 'Nazareno'
        },
        {
          estado_id: '11',
          cidade: 'Nepomuceno'
        },
        {
          estado_id: '11',
          cidade: 'Ninheira'
        },
        {
          estado_id: '11',
          cidade: 'Nova Belém'
        },
        {
          estado_id: '11',
          cidade: 'Nova Era'
        },
        {
          estado_id: '11',
          cidade: 'Nova Módica'
        },
        {
          estado_id: '11',
          cidade: 'Nova Porteirinha'
        },
        {
          estado_id: '11',
          cidade: 'Nova Resende'
        },
        {
          estado_id: '11',
          cidade: 'Nova Serrana'
        },
        {
          estado_id: '11',
          cidade: 'Nova União'
        },
        {
          estado_id: '11',
          cidade: 'Novo Cruzeiro'
        },
        {
          estado_id: '11',
          cidade: 'Novo Oriente de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Novorizonte'
        },
        {
          estado_id: '11',
          cidade: 'Olaria'
        },
        {
          estado_id: '11',
          cidade: 'Olhos d Água'
        },
        {
          estado_id: '11',
          cidade: 'Olímpio Noronha'
        },
        {
          estado_id: '11',
          cidade: 'Oliveira'
        },
        {
          estado_id: '11',
          cidade: 'Oliveira Fortes'
        },
        {
          estado_id: '11',
          cidade: 'Onça de Pitangui'
        },
        {
          estado_id: '11',
          cidade: 'Oratórios'
        },
        {
          estado_id: '11',
          cidade: 'Orizânia'
        },
        {
          estado_id: '11',
          cidade: 'Ouro Fino'
        },
        {
          estado_id: '11',
          cidade: 'Ouro Preto'
        },
        {
          estado_id: '11',
          cidade: 'Ouro Verde de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Padre Carvalho'
        },
        {
          estado_id: '11',
          cidade: 'Padre Paraíso'
        },
        {
          estado_id: '11',
          cidade: 'Pai Pedro'
        },
        {
          estado_id: '11',
          cidade: 'Paineiras'
        },
        {
          estado_id: '11',
          cidade: 'Pains'
        },
        {
          estado_id: '11',
          cidade: 'Paiva'
        },
        {
          estado_id: '11',
          cidade: 'Palma'
        },
        {
          estado_id: '11',
          cidade: 'Palmópolis'
        },
        {
          estado_id: '11',
          cidade: 'Papagaios'
        },
        {
          estado_id: '11',
          cidade: 'Pará de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Paracatu'
        },
        {
          estado_id: '11',
          cidade: 'Paraguaçu'
        },
        {
          estado_id: '11',
          cidade: 'Paraisópolis'
        },
        {
          estado_id: '11',
          cidade: 'Paraopeba'
        },
        {
          estado_id: '11',
          cidade: 'Passa Quatro'
        },
        {
          estado_id: '11',
          cidade: 'Passa Tempo'
        },
        {
          estado_id: '11',
          cidade: 'Passabém'
        },
        {
          estado_id: '11',
          cidade: 'Passa-Vinte'
        },
        {
          estado_id: '11',
          cidade: 'Passos'
        },
        {
          estado_id: '11',
          cidade: 'Patis'
        },
        {
          estado_id: '11',
          cidade: 'Patos de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Patrocínio'
        },
        {
          estado_id: '11',
          cidade: 'Patrocínio do Muriaé'
        },
        {
          estado_id: '11',
          cidade: 'Paula Cândido'
        },
        {
          estado_id: '11',
          cidade: 'Paulistas'
        },
        {
          estado_id: '11',
          cidade: 'Pavão'
        },
        {
          estado_id: '11',
          cidade: 'Peçanha'
        },
        {
          estado_id: '11',
          cidade: 'Pedra Azul'
        },
        {
          estado_id: '11',
          cidade: 'Pedra Bonita'
        },
        {
          estado_id: '11',
          cidade: 'Pedra do Anta'
        },
        {
          estado_id: '11',
          cidade: 'Pedra do Indaiá'
        },
        {
          estado_id: '11',
          cidade: 'Pedra Dourada'
        },
        {
          estado_id: '11',
          cidade: 'Pedralva'
        },
        {
          estado_id: '11',
          cidade: 'Pedras de Maria da Cruz'
        },
        {
          estado_id: '11',
          cidade: 'Pedrinópolis'
        },
        {
          estado_id: '11',
          cidade: 'Pedro Leopoldo'
        },
        {
          estado_id: '11',
          cidade: 'Pedro Teixeira'
        },
        {
          estado_id: '11',
          cidade: 'Pequeri'
        },
        {
          estado_id: '11',
          cidade: 'Pequi'
        },
        {
          estado_id: '11',
          cidade: 'Perdigão'
        },
        {
          estado_id: '11',
          cidade: 'Perdizes'
        },
        {
          estado_id: '11',
          cidade: 'Perdões'
        },
        {
          estado_id: '11',
          cidade: 'Periquito'
        },
        {
          estado_id: '11',
          cidade: 'Pescador'
        },
        {
          estado_id: '11',
          cidade: 'Piau'
        },
        {
          estado_id: '11',
          cidade: 'Piedade de Caratinga'
        },
        {
          estado_id: '11',
          cidade: 'Piedade de Ponte Nova'
        },
        {
          estado_id: '11',
          cidade: 'Piedade do Rio Grande'
        },
        {
          estado_id: '11',
          cidade: 'Piedade dos Gerais'
        },
        {
          estado_id: '11',
          cidade: 'Pimenta'
        },
        {
          estado_id: '11',
          cidade: 'Pingo-d Água'
        },
        {
          estado_id: '11',
          cidade: 'Pintópolis'
        },
        {
          estado_id: '11',
          cidade: 'Piracema'
        },
        {
          estado_id: '11',
          cidade: 'Pirajuba'
        },
        {
          estado_id: '11',
          cidade: 'Piranga'
        },
        {
          estado_id: '11',
          cidade: 'Piranguçu'
        },
        {
          estado_id: '11',
          cidade: 'Piranguinho'
        },
        {
          estado_id: '11',
          cidade: 'Pirapetinga'
        },
        {
          estado_id: '11',
          cidade: 'Pirapora'
        },
        {
          estado_id: '11',
          cidade: 'Piraúba'
        },
        {
          estado_id: '11',
          cidade: 'Piumhi'
        },
        {
          estado_id: '11',
          cidade: 'Planura'
        },
        {
          estado_id: '11',
          cidade: 'Poço Fundo'
        },
        {
          estado_id: '11',
          cidade: 'Poços de Caldas'
        },
        {
          estado_id: '11',
          cidade: 'Pocrane'
        },
        {
          estado_id: '11',
          cidade: 'Pompéu'
        },
        {
          estado_id: '11',
          cidade: 'Ponte Nova'
        },
        {
          estado_id: '11',
          cidade: 'Ponto Chique'
        },
        {
          estado_id: '11',
          cidade: 'Ponto dos Volantes'
        },
        {
          estado_id: '11',
          cidade: 'Porteirinha'
        },
        {
          estado_id: '11',
          cidade: 'Porto Firme'
        },
        {
          estado_id: '11',
          cidade: 'Poté'
        },
        {
          estado_id: '11',
          cidade: 'Pouso Alegre'
        },
        {
          estado_id: '11',
          cidade: 'Pouso Alto'
        },
        {
          estado_id: '11',
          cidade: 'Prados'
        },
        {
          estado_id: '11',
          cidade: 'Prata'
        },
        {
          estado_id: '11',
          cidade: 'Pratápolis'
        },
        {
          estado_id: '11',
          cidade: 'Pratinha'
        },
        {
          estado_id: '11',
          cidade: 'Presidente Bernardes'
        },
        {
          estado_id: '11',
          cidade: 'Presidente Juscelino'
        },
        {
          estado_id: '11',
          cidade: 'Presidente Kubitschek'
        },
        {
          estado_id: '11',
          cidade: 'Presidente Olegário'
        },
        {
          estado_id: '11',
          cidade: 'Prudente de Morais'
        },
        {
          estado_id: '11',
          cidade: 'Quartel Geral'
        },
        {
          estado_id: '11',
          cidade: 'Queluzito'
        },
        {
          estado_id: '11',
          cidade: 'Raposos'
        },
        {
          estado_id: '11',
          cidade: 'Raul Soares'
        },
        {
          estado_id: '11',
          cidade: 'Recreio'
        },
        {
          estado_id: '11',
          cidade: 'Reduto'
        },
        {
          estado_id: '11',
          cidade: 'Resende Costa'
        },
        {
          estado_id: '11',
          cidade: 'Resplendor'
        },
        {
          estado_id: '11',
          cidade: 'Ressaquinha'
        },
        {
          estado_id: '11',
          cidade: 'Riachinho'
        },
        {
          estado_id: '11',
          cidade: 'Riacho dos Machados'
        },
        {
          estado_id: '11',
          cidade: 'Ribeirão Vermelho'
        },
        {
          estado_id: '11',
          cidade: 'Rio Acima'
        },
        {
          estado_id: '11',
          cidade: 'Rio Casca'
        },
        {
          estado_id: '11',
          cidade: 'Rio do Prado'
        },
        {
          estado_id: '11',
          cidade: 'Rio Doce'
        },
        {
          estado_id: '11',
          cidade: 'Rio Espera'
        },
        {
          estado_id: '11',
          cidade: 'Rio Manso'
        },
        {
          estado_id: '11',
          cidade: 'Rio Novo'
        },
        {
          estado_id: '11',
          cidade: 'Rio Paranaíba'
        },
        {
          estado_id: '11',
          cidade: 'Rio Pardo de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Rio Piracicaba'
        },
        {
          estado_id: '11',
          cidade: 'Rio Pomba'
        },
        {
          estado_id: '11',
          cidade: 'Rio Preto'
        },
        {
          estado_id: '11',
          cidade: 'Rio Vermelho'
        },
        {
          estado_id: '11',
          cidade: 'Ritápolis'
        },
        {
          estado_id: '11',
          cidade: 'Rochedo de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Rodeiro'
        },
        {
          estado_id: '11',
          cidade: 'Romaria'
        },
        {
          estado_id: '11',
          cidade: 'Rosário da Limeira'
        },
        {
          estado_id: '11',
          cidade: 'Rubelita'
        },
        {
          estado_id: '11',
          cidade: 'Rubim'
        },
        {
          estado_id: '11',
          cidade: 'Sabinópolis'
        },
        {
          estado_id: '11',
          cidade: 'Sacramento'
        },
        {
          estado_id: '11',
          cidade: 'Salinas'
        },
        {
          estado_id: '11',
          cidade: 'Salto da Divisa'
        },
        {
          estado_id: '11',
          cidade: 'Santa Bárbara'
        },
        {
          estado_id: '11',
          cidade: 'Santa Bárbara do Leste'
        },
        {
          estado_id: '11',
          cidade: 'Santa Bárbara do Monte Verde'
        },
        {
          estado_id: '11',
          cidade: 'Santa Bárbara do Tugúrio'
        },
        {
          estado_id: '11',
          cidade: 'Santa Cruz de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Santa Cruz de Salinas'
        },
        {
          estado_id: '11',
          cidade: 'Santa Cruz do Escalvado'
        },
        {
          estado_id: '11',
          cidade: 'Santa Efigênia de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Santa Fé de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Santa Helena de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Santa Juliana'
        },
        {
          estado_id: '11',
          cidade: 'Santa Margarida'
        },
        {
          estado_id: '11',
          cidade: 'Santa Maria de Itabira'
        },
        {
          estado_id: '11',
          cidade: 'Santa Maria do Salto'
        },
        {
          estado_id: '11',
          cidade: 'Santa Maria do Suaçuí'
        },
        {
          estado_id: '11',
          cidade: 'Santa Rita de Caldas'
        },
        {
          estado_id: '11',
          cidade: 'Santa Rita de Ibitipoca'
        },
        {
          estado_id: '11',
          cidade: 'Santa Rita de Jacutinga'
        },
        {
          estado_id: '11',
          cidade: 'Santa Rita de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Santa Rita do Itueto'
        },
        {
          estado_id: '11',
          cidade: 'Santa Rosa da Serra'
        },
        {
          estado_id: '11',
          cidade: 'Santa Vitória'
        },
        {
          estado_id: '11',
          cidade: 'Santana da Vargem'
        },
        {
          estado_id: '11',
          cidade: 'Santana de Cataguases'
        },
        {
          estado_id: '11',
          cidade: 'Santana de Pirapama'
        },
        {
          estado_id: '11',
          cidade: 'Santana do Deserto'
        },
        {
          estado_id: '11',
          cidade: 'Santana do Garambéu'
        },
        {
          estado_id: '11',
          cidade: 'Santana do Jacaré'
        },
        {
          estado_id: '11',
          cidade: 'Santana do Manhuaçu'
        },
        {
          estado_id: '11',
          cidade: 'Santana do Paraíso'
        },
        {
          estado_id: '11',
          cidade: 'Santana do Riacho'
        },
        {
          estado_id: '11',
          cidade: 'Santana dos Montes'
        },
        {
          estado_id: '11',
          cidade: 'Santo Antônio do Amparo'
        },
        {
          estado_id: '11',
          cidade: 'Santo Antônio do Aventureiro'
        },
        {
          estado_id: '11',
          cidade: 'Santo Antônio do Grama'
        },
        {
          estado_id: '11',
          cidade: 'Santo Antônio do Itambé'
        },
        {
          estado_id: '11',
          cidade: 'Santo Antônio do Jacinto'
        },
        {
          estado_id: '11',
          cidade: 'Santo Antônio do Monte'
        },
        {
          estado_id: '11',
          cidade: 'Santo Antônio do Retiro'
        },
        {
          estado_id: '11',
          cidade: 'Santo Antônio do Rio Abaixo'
        },
        {
          estado_id: '11',
          cidade: 'Santo Hipólito'
        },
        {
          estado_id: '11',
          cidade: 'Santos Dumont'
        },
        {
          estado_id: '11',
          cidade: 'São Domingos das Dores'
        },
        {
          estado_id: '11',
          cidade: 'São Domingos do Prata'
        },
        {
          estado_id: '11',
          cidade: 'São Félix de Minas'
        },
        {
          estado_id: '11',
          cidade: 'São Francisco'
        },
        {
          estado_id: '11',
          cidade: 'São Francisco de Paula'
        },
        {
          estado_id: '11',
          cidade: 'São Francisco de Sales'
        },
        {
          estado_id: '11',
          cidade: 'São Francisco do Glória'
        },
        {
          estado_id: '11',
          cidade: 'São Geraldo'
        },
        {
          estado_id: '11',
          cidade: 'São Geraldo da Piedade'
        },
        {
          estado_id: '11',
          cidade: 'São Geraldo do Baixio'
        },
        {
          estado_id: '11',
          cidade: 'São Gonçalo do Abaeté'
        },
        {
          estado_id: '11',
          cidade: 'São Gonçalo do Pará'
        },
        {
          estado_id: '11',
          cidade: 'São Gonçalo do Rio Abaixo'
        },
        {
          estado_id: '11',
          cidade: 'São Gonçalo do Rio Preto'
        },
        {
          estado_id: '11',
          cidade: 'São Gonçalo do Sapucaí'
        },
        {
          estado_id: '11',
          cidade: 'São Gotardo'
        },
        {
          estado_id: '11',
          cidade: 'São João Batista do Glória'
        },
        {
          estado_id: '11',
          cidade: 'São João da Lagoa'
        },
        {
          estado_id: '11',
          cidade: 'São João da Mata'
        },
        {
          estado_id: '11',
          cidade: 'São João da Ponte'
        },
        {
          estado_id: '11',
          cidade: 'São João das Missões'
        },
        {
          estado_id: '11',
          cidade: 'São João del Rei'
        },
        {
          estado_id: '11',
          cidade: 'São João do Manhuaçu'
        },
        {
          estado_id: '11',
          cidade: 'São João do Manteninha'
        },
        {
          estado_id: '11',
          cidade: 'São João do Oriente'
        },
        {
          estado_id: '11',
          cidade: 'São João do Pacuí'
        },
        {
          estado_id: '11',
          cidade: 'São João do Paraíso'
        },
        {
          estado_id: '11',
          cidade: 'São João Evangelista'
        },
        {
          estado_id: '11',
          cidade: 'São João Nepomuceno'
        },
        {
          estado_id: '11',
          cidade: 'São José da Barra'
        },
        {
          estado_id: '11',
          cidade: 'São José da Safira'
        },
        {
          estado_id: '11',
          cidade: 'São José do Alegre'
        },
        {
          estado_id: '11',
          cidade: 'São José do Divino'
        },
        {
          estado_id: '11',
          cidade: 'São José do Goiabal'
        },
        {
          estado_id: '11',
          cidade: 'São José do Jacuri'
        },
        {
          estado_id: '11',
          cidade: 'São José do Mantimento'
        },
        {
          estado_id: '11',
          cidade: 'São Lourenço'
        },
        {
          estado_id: '11',
          cidade: 'São Miguel do Anta'
        },
        {
          estado_id: '11',
          cidade: 'São Pedro da União'
        },
        {
          estado_id: '11',
          cidade: 'São Pedro do Suaçuí'
        },
        {
          estado_id: '11',
          cidade: 'São Pedro dos Ferros'
        },
        {
          estado_id: '11',
          cidade: 'São Romão'
        },
        {
          estado_id: '11',
          cidade: 'São Roque de Minas'
        },
        {
          estado_id: '11',
          cidade: 'São Sebastião da Bela Vista'
        },
        {
          estado_id: '11',
          cidade: 'São Sebastião da Vargem Alegre'
        },
        {
          estado_id: '11',
          cidade: 'São Sebastião do Anta'
        },
        {
          estado_id: '11',
          cidade: 'São Sebastião do Maranhão'
        },
        {
          estado_id: '11',
          cidade: 'São Sebastião do Paraíso'
        },
        {
          estado_id: '11',
          cidade: 'São Sebastião do Rio Preto'
        },
        {
          estado_id: '11',
          cidade: 'São Sebastião do Rio Verde'
        },
        {
          estado_id: '11',
          cidade: 'São Tiago'
        },
        {
          estado_id: '11',
          cidade: 'São Tomás de Aquino'
        },
        {
          estado_id: '11',
          cidade: 'São Vicente de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Sapucaí-Mirim'
        },
        {
          estado_id: '11',
          cidade: 'Sardoá'
        },
        {
          estado_id: '11',
          cidade: 'Sem-Peixe'
        },
        {
          estado_id: '11',
          cidade: 'Senador Amaral'
        },
        {
          estado_id: '11',
          cidade: 'Senador Cortes'
        },
        {
          estado_id: '11',
          cidade: 'Senador Firmino'
        },
        {
          estado_id: '11',
          cidade: 'Senador José Bento'
        },
        {
          estado_id: '11',
          cidade: 'Senador Modestino Gonçalves'
        },
        {
          estado_id: '11',
          cidade: 'Senhora de Oliveira'
        },
        {
          estado_id: '11',
          cidade: 'Senhora do Porto'
        },
        {
          estado_id: '11',
          cidade: 'Senhora dos Remédios'
        },
        {
          estado_id: '11',
          cidade: 'Sericita'
        },
        {
          estado_id: '11',
          cidade: 'Seritinga'
        },
        {
          estado_id: '11',
          cidade: 'Serra Azul de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Serra da Saudade'
        },
        {
          estado_id: '11',
          cidade: 'Serra do Salitre'
        },
        {
          estado_id: '11',
          cidade: 'Serra dos Aimorés'
        },
        {
          estado_id: '11',
          cidade: 'Serrania'
        },
        {
          estado_id: '11',
          cidade: 'Serranópolis de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Serranos'
        },
        {
          estado_id: '11',
          cidade: 'Serro'
        },
        {
          estado_id: '11',
          cidade: 'Setubinha'
        },
        {
          estado_id: '11',
          cidade: 'Silveirânia'
        },
        {
          estado_id: '11',
          cidade: 'Silvianópolis'
        },
        {
          estado_id: '11',
          cidade: 'Simão Pereira'
        },
        {
          estado_id: '11',
          cidade: 'Simonésia'
        },
        {
          estado_id: '11',
          cidade: 'Sobrália'
        },
        {
          estado_id: '11',
          cidade: 'Soledade de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Tabuleiro'
        },
        {
          estado_id: '11',
          cidade: 'Taiobeiras'
        },
        {
          estado_id: '11',
          cidade: 'Taparuba'
        },
        {
          estado_id: '11',
          cidade: 'Tapira'
        },
        {
          estado_id: '11',
          cidade: 'Tapiraí'
        },
        {
          estado_id: '11',
          cidade: 'Taquaraçu de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Tarumirim'
        },
        {
          estado_id: '11',
          cidade: 'Teixeiras'
        },
        {
          estado_id: '11',
          cidade: 'Timóteo'
        },
        {
          estado_id: '11',
          cidade: 'Tiradentes'
        },
        {
          estado_id: '11',
          cidade: 'Tiros'
        },
        {
          estado_id: '11',
          cidade: 'Tocantins'
        },
        {
          estado_id: '11',
          cidade: 'Tocos do Moji'
        },
        {
          estado_id: '11',
          cidade: 'Toledo'
        },
        {
          estado_id: '11',
          cidade: 'Tombos'
        },
        {
          estado_id: '11',
          cidade: 'Três Marias'
        },
        {
          estado_id: '11',
          cidade: 'Três Pontas'
        },
        {
          estado_id: '11',
          cidade: 'Tumiritinga'
        },
        {
          estado_id: '11',
          cidade: 'Tupaciguara'
        },
        {
          estado_id: '11',
          cidade: 'Turmalina'
        },
        {
          estado_id: '11',
          cidade: 'Turvolândia'
        },
        {
          estado_id: '11',
          cidade: 'Ubá'
        },
        {
          estado_id: '11',
          cidade: 'Ubaí'
        },
        {
          estado_id: '11',
          cidade: 'Ubaporanga'
        },
        {
          estado_id: '11',
          cidade: 'Umburatiba'
        },
        {
          estado_id: '11',
          cidade: 'Unaí'
        },
        {
          estado_id: '11',
          cidade: 'União de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Uruana de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Urucânia'
        },
        {
          estado_id: '11',
          cidade: 'Urucuia'
        },
        {
          estado_id: '11',
          cidade: 'Vargem Alegre'
        },
        {
          estado_id: '11',
          cidade: 'Vargem Bonita'
        },
        {
          estado_id: '11',
          cidade: 'Vargem Grande do Rio Pardo'
        },
        {
          estado_id: '11',
          cidade: 'Varginha'
        },
        {
          estado_id: '11',
          cidade: 'Varjão de Minas'
        },
        {
          estado_id: '11',
          cidade: 'Várzea da Palma'
        },
        {
          estado_id: '11',
          cidade: 'Varzelândia'
        },
        {
          estado_id: '11',
          cidade: 'Vazante'
        },
        {
          estado_id: '11',
          cidade: 'Verdelândia'
        },
        {
          estado_id: '11',
          cidade: 'Veredinha'
        },
        {
          estado_id: '11',
          cidade: 'Vermelho Novo'
        },
        {
          estado_id: '11',
          cidade: 'Viçosa'
        },
        {
          estado_id: '11',
          cidade: 'Vieiras'
        },
        {
          estado_id: '11',
          cidade: 'Virgem da Lapa'
        },
        {
          estado_id: '11',
          cidade: 'Virgínia'
        },
        {
          estado_id: '11',
          cidade: 'Virginópolis'
        },
        {
          estado_id: '11',
          cidade: 'Virgolândia'
        },
        {
          estado_id: '11',
          cidade: 'Visconde do Rio Branco'
        },
        {
          estado_id: '11',
          cidade: 'Volta Grande'
        },
        {
          estado_id: '11',
          cidade: 'Wenceslau Braz'
        },
        {
          estado_id: '11',
          cidade: 'Lagoa Santa'
        },
        {
          estado_id: '11',
          cidade: 'São José da Varginha'
        },
        {
          estado_id: '11',
          cidade: 'Glaucilândia'
        },
        {
          estado_id: '11',
          cidade: 'Delta'
        },
        {
          estado_id: '11',
          cidade: 'Matozinhos'
        },
        {
          estado_id: '11',
          cidade: 'Veríssimo'
        },
        {
          estado_id: '11',
          cidade: 'São Sebastião do Oeste'
        },
        {
          estado_id: '11',
          cidade: 'São José da Lapa'
        },
        {
          estado_id: '11',
          cidade: 'Nova Ponte'
        },
        {
          estado_id: '11',
          cidade: 'Mateus Leme'
        },
        {
          estado_id: '11',
          cidade: 'São Joaquim de Bicas'
        },
        {
          estado_id: '11',
          cidade: 'Uberaba'
        },
        {
          estado_id: '11',
          cidade: 'Igarapé'
        },
        {
          estado_id: '11',
          cidade: 'Carmo do Cajuru'
        },
        {
          estado_id: '11',
          cidade: 'Belo Horizonte'
        },
        {
          estado_id: '11',
          cidade: 'Ibirité'
        },
        {
          estado_id: '11',
          cidade: 'São Thomé das Letras'
        },
        {
          estado_id: '11',
          cidade: 'Mário Campos'
        },
        {
          estado_id: '11',
          cidade: 'Divinópolis'
        },
        {
          estado_id: '11',
          cidade: 'Governador Valadares'
        },
        {
          estado_id: '11',
          cidade: 'Contagem'
        },
        {
          estado_id: '11',
          cidade: 'Três Corações'
        },
        {
          estado_id: '11',
          cidade: 'Sabará'
        },
        {
          estado_id: '11',
          cidade: 'Montes Claros'
        },
        {
          estado_id: '11',
          cidade: 'Nova Lima'
        },
        {
          estado_id: '11',
          cidade: 'Itajubá'
        },
        {
          estado_id: '11',
          cidade: 'Ribeirão das Neves'
        },
        {
          estado_id: '11',
          cidade: 'Vespasiano'
        },
        {
          estado_id: '11',
          cidade: 'Betim'
        },
        {
          estado_id: '11',
          cidade: 'Juiz de Fora'
        },
        {
          estado_id: '11',
          cidade: 'Teófilo Otoni'
        },
        {
          estado_id: '11',
          cidade: 'Sete Lagoas'
        },
        {
          estado_id: '11',
          cidade: 'Uberlândia'
        },
        {
          estado_id: '11',
          cidade: 'Conselheiro Lafaiete'
        },
        {
          estado_id: '11',
          cidade: 'Ipatinga'
        },
        {
          estado_id: '11',
          cidade: 'Santa Luzia'
        },
        {
          estado_id: '11',
          cidade: 'Santa Rita do Sapucaí'
        },
        {
          estado_id: '11',
          cidade: 'Camanducaia'
        },
        {
          estado_id: '11',
          cidade: 'Sarzedo'
        },
        {
          estado_id: '12',
          cidade: 'Água Clara'
        },
        {
          estado_id: '12',
          cidade: 'Alcinópolis'
        },
        {
          estado_id: '12',
          cidade: 'Amambai'
        },
        {
          estado_id: '12',
          cidade: 'Anastácio'
        },
        {
          estado_id: '12',
          cidade: 'Anaurilândia'
        },
        {
          estado_id: '12',
          cidade: 'Angélica'
        },
        {
          estado_id: '12',
          cidade: 'Antônio João'
        },
        {
          estado_id: '12',
          cidade: 'Aparecida do Taboado'
        },
        {
          estado_id: '12',
          cidade: 'Aquidauana'
        },
        {
          estado_id: '12',
          cidade: 'Aral Moreira'
        },
        {
          estado_id: '12',
          cidade: 'Bandeirantes'
        },
        {
          estado_id: '12',
          cidade: 'Bataguassu'
        },
        {
          estado_id: '12',
          cidade: 'Batayporã'
        },
        {
          estado_id: '12',
          cidade: 'Bela Vista'
        },
        {
          estado_id: '12',
          cidade: 'Bodoquena'
        },
        {
          estado_id: '12',
          cidade: 'Bonito'
        },
        {
          estado_id: '12',
          cidade: 'Brasilândia'
        },
        {
          estado_id: '12',
          cidade: 'Caarapó'
        },
        {
          estado_id: '12',
          cidade: 'Camapuã'
        },
        {
          estado_id: '12',
          cidade: 'Caracol'
        },
        {
          estado_id: '12',
          cidade: 'Cassilândia'
        },
        {
          estado_id: '12',
          cidade: 'Chapadão do Sul'
        },
        {
          estado_id: '12',
          cidade: 'Corguinho'
        },
        {
          estado_id: '12',
          cidade: 'Coronel Sapucaia'
        },
        {
          estado_id: '12',
          cidade: 'Corumbá'
        },
        {
          estado_id: '12',
          cidade: 'Costa Rica'
        },
        {
          estado_id: '12',
          cidade: 'Coxim'
        },
        {
          estado_id: '12',
          cidade: 'Deodápolis'
        },
        {
          estado_id: '12',
          cidade: 'Dois Irmãos do Buriti'
        },
        {
          estado_id: '12',
          cidade: 'Douradina'
        },
        {
          estado_id: '12',
          cidade: 'Dourados'
        },
        {
          estado_id: '12',
          cidade: 'Eldorado'
        },
        {
          estado_id: '12',
          cidade: 'Fátima do Sul'
        },
        {
          estado_id: '12',
          cidade: 'Figueirão'
        },
        {
          estado_id: '12',
          cidade: 'Glória de Dourados'
        },
        {
          estado_id: '12',
          cidade: 'Guia Lopes da Laguna'
        },
        {
          estado_id: '12',
          cidade: 'Iguatemi'
        },
        {
          estado_id: '12',
          cidade: 'Inocência'
        },
        {
          estado_id: '12',
          cidade: 'Itaporã'
        },
        {
          estado_id: '12',
          cidade: 'Itaquiraí'
        },
        {
          estado_id: '12',
          cidade: 'Ivinhema'
        },
        {
          estado_id: '12',
          cidade: 'Japorã'
        },
        {
          estado_id: '12',
          cidade: 'Jaraguari'
        },
        {
          estado_id: '12',
          cidade: 'Jardim'
        },
        {
          estado_id: '12',
          cidade: 'Jateí'
        },
        {
          estado_id: '12',
          cidade: 'Juti'
        },
        {
          estado_id: '12',
          cidade: 'Ladário'
        },
        {
          estado_id: '12',
          cidade: 'Laguna Carapã'
        },
        {
          estado_id: '12',
          cidade: 'Maracaju'
        },
        {
          estado_id: '12',
          cidade: 'Miranda'
        },
        {
          estado_id: '12',
          cidade: 'Mundo Novo'
        },
        {
          estado_id: '12',
          cidade: 'Naviraí'
        },
        {
          estado_id: '12',
          cidade: 'Nioaque'
        },
        {
          estado_id: '12',
          cidade: 'Nova Alvorada do Sul'
        },
        {
          estado_id: '12',
          cidade: 'Nova Andradina'
        },
        {
          estado_id: '12',
          cidade: 'Novo Horizonte do Sul'
        },
        {
          estado_id: '12',
          cidade: 'Paraíso das Águas'
        },
        {
          estado_id: '12',
          cidade: 'Paranaíba'
        },
        {
          estado_id: '12',
          cidade: 'Paranhos'
        },
        {
          estado_id: '12',
          cidade: 'Pedro Gomes'
        },
        {
          estado_id: '12',
          cidade: 'Ponta Porã'
        },
        {
          estado_id: '12',
          cidade: 'Porto Murtinho'
        },
        {
          estado_id: '12',
          cidade: 'Ribas do Rio Pardo'
        },
        {
          estado_id: '12',
          cidade: 'Rio Brilhante'
        },
        {
          estado_id: '12',
          cidade: 'Rio Negro'
        },
        {
          estado_id: '12',
          cidade: 'Rio Verde de Mato Grosso'
        },
        {
          estado_id: '12',
          cidade: 'Rochedo'
        },
        {
          estado_id: '12',
          cidade: 'Santa Rita do Pardo'
        },
        {
          estado_id: '12',
          cidade: 'São Gabriel do Oeste'
        },
        {
          estado_id: '12',
          cidade: 'Selvíria'
        },
        {
          estado_id: '12',
          cidade: 'Sete Quedas'
        },
        {
          estado_id: '12',
          cidade: 'Sidrolândia'
        },
        {
          estado_id: '12',
          cidade: 'Sonora'
        },
        {
          estado_id: '12',
          cidade: 'Tacuru'
        },
        {
          estado_id: '12',
          cidade: 'Taquarussu'
        },
        {
          estado_id: '12',
          cidade: 'Terenos'
        },
        {
          estado_id: '12',
          cidade: 'Três Lagoas'
        },
        {
          estado_id: '12',
          cidade: 'Vicentina'
        },
        {
          estado_id: '12',
          cidade: 'Campo Grande'
        },
        {
          estado_id: '13',
          cidade: 'Acorizal'
        },
        {
          estado_id: '13',
          cidade: 'Água Boa'
        },
        {
          estado_id: '13',
          cidade: 'Alta Floresta'
        },
        {
          estado_id: '13',
          cidade: 'Alto Araguaia'
        },
        {
          estado_id: '13',
          cidade: 'Alto Boa Vista'
        },
        {
          estado_id: '13',
          cidade: 'Alto Garças'
        },
        {
          estado_id: '13',
          cidade: 'Alto Taquari'
        },
        {
          estado_id: '13',
          cidade: 'Apiacás'
        },
        {
          estado_id: '13',
          cidade: 'Araguaiana'
        },
        {
          estado_id: '13',
          cidade: 'Araguainha'
        },
        {
          estado_id: '13',
          cidade: 'Araputanga'
        },
        {
          estado_id: '13',
          cidade: 'Aripuanã'
        },
        {
          estado_id: '13',
          cidade: 'Barão de Melgaço'
        },
        {
          estado_id: '13',
          cidade: 'Barra do Bugres'
        },
        {
          estado_id: '13',
          cidade: 'Barra do Garças'
        },
        {
          estado_id: '13',
          cidade: 'Bom Jesus do Araguaia'
        },
        {
          estado_id: '13',
          cidade: 'Brasnorte'
        },
        {
          estado_id: '13',
          cidade: 'Campinápolis'
        },
        {
          estado_id: '13',
          cidade: 'Campos de Júlio'
        },
        {
          estado_id: '13',
          cidade: 'Canabrava do Norte'
        },
        {
          estado_id: '13',
          cidade: 'Canarana'
        },
        {
          estado_id: '13',
          cidade: 'Carlinda'
        },
        {
          estado_id: '13',
          cidade: 'Castanheira'
        },
        {
          estado_id: '13',
          cidade: 'Chapada dos Guimarães'
        },
        {
          estado_id: '13',
          cidade: 'Cláudia'
        },
        {
          estado_id: '13',
          cidade: 'Cocalinho'
        },
        {
          estado_id: '13',
          cidade: 'Colíder'
        },
        {
          estado_id: '13',
          cidade: 'Colniza'
        },
        {
          estado_id: '13',
          cidade: 'Comodoro'
        },
        {
          estado_id: '13',
          cidade: 'Confresa'
        },
        {
          estado_id: '13',
          cidade: 'Conquista d Oeste'
        },
        {
          estado_id: '13',
          cidade: 'Cotriguaçu'
        },
        {
          estado_id: '13',
          cidade: 'Curvelândia'
        },
        {
          estado_id: '13',
          cidade: 'Denise'
        },
        {
          estado_id: '13',
          cidade: 'Dom Aquino'
        },
        {
          estado_id: '13',
          cidade: 'Feliz Natal'
        },
        {
          estado_id: '13',
          cidade: 'Figueirópolis d Oeste'
        },
        {
          estado_id: '13',
          cidade: 'Gaúcha do Norte'
        },
        {
          estado_id: '13',
          cidade: 'General Carneiro'
        },
        {
          estado_id: '13',
          cidade: 'Glória d Oeste'
        },
        {
          estado_id: '13',
          cidade: 'Guarantã do Norte'
        },
        {
          estado_id: '13',
          cidade: 'Guiratinga'
        },
        {
          estado_id: '13',
          cidade: 'Indiavaí'
        },
        {
          estado_id: '13',
          cidade: 'Ipiranga do Norte'
        },
        {
          estado_id: '13',
          cidade: 'Itanhangá'
        },
        {
          estado_id: '13',
          cidade: 'Itaúba'
        },
        {
          estado_id: '13',
          cidade: 'Itiquira'
        },
        {
          estado_id: '13',
          cidade: 'Jaciara'
        },
        {
          estado_id: '13',
          cidade: 'Jangada'
        },
        {
          estado_id: '13',
          cidade: 'Jauru'
        },
        {
          estado_id: '13',
          cidade: 'Juara'
        },
        {
          estado_id: '13',
          cidade: 'Juína'
        },
        {
          estado_id: '13',
          cidade: 'Juruena'
        },
        {
          estado_id: '13',
          cidade: 'Juscimeira'
        },
        {
          estado_id: '13',
          cidade: 'Lambari d Oeste'
        },
        {
          estado_id: '13',
          cidade: 'Luciara'
        },
        {
          estado_id: '13',
          cidade: 'Marcelândia'
        },
        {
          estado_id: '13',
          cidade: 'Matupá'
        },
        {
          estado_id: '13',
          cidade: 'Mirassol d Oeste'
        },
        {
          estado_id: '13',
          cidade: 'Nobres'
        },
        {
          estado_id: '13',
          cidade: 'Nova Bandeirantes'
        },
        {
          estado_id: '13',
          cidade: 'Nova Brasilândia'
        },
        {
          estado_id: '13',
          cidade: 'Nova Canaã do Norte'
        },
        {
          estado_id: '13',
          cidade: 'Nova Guarita'
        },
        {
          estado_id: '13',
          cidade: 'Nova Lacerda'
        },
        {
          estado_id: '13',
          cidade: 'Nova Marilândia'
        },
        {
          estado_id: '13',
          cidade: 'Nova Maringá'
        },
        {
          estado_id: '13',
          cidade: 'Nova Monte Verde'
        },
        {
          estado_id: '13',
          cidade: 'Nova Nazaré'
        },
        {
          estado_id: '13',
          cidade: 'Nova Olímpia'
        },
        {
          estado_id: '13',
          cidade: 'Nova Santa Helena'
        },
        {
          estado_id: '13',
          cidade: 'Nova Ubiratã'
        },
        {
          estado_id: '13',
          cidade: 'Nova Xavantina'
        },
        {
          estado_id: '13',
          cidade: 'Novo Horizonte do Norte'
        },
        {
          estado_id: '13',
          cidade: 'Novo Mundo'
        },
        {
          estado_id: '13',
          cidade: 'Novo Santo Antônio'
        },
        {
          estado_id: '13',
          cidade: 'Novo São Joaquim'
        },
        {
          estado_id: '13',
          cidade: 'Paranaíta'
        },
        {
          estado_id: '13',
          cidade: 'Paranatinga'
        },
        {
          estado_id: '13',
          cidade: 'Pedra Preta'
        },
        {
          estado_id: '13',
          cidade: 'Peixoto de Azevedo'
        },
        {
          estado_id: '13',
          cidade: 'Planalto da Serra'
        },
        {
          estado_id: '13',
          cidade: 'Poconé'
        },
        {
          estado_id: '13',
          cidade: 'Pontal do Araguaia'
        },
        {
          estado_id: '13',
          cidade: 'Ponte Branca'
        },
        {
          estado_id: '13',
          cidade: 'Pontes e Lacerda'
        },
        {
          estado_id: '13',
          cidade: 'Porto Alegre do Norte'
        },
        {
          estado_id: '13',
          cidade: 'Porto dos Gaúchos'
        },
        {
          estado_id: '13',
          cidade: 'Porto Esperidião'
        },
        {
          estado_id: '13',
          cidade: 'Porto Estrela'
        },
        {
          estado_id: '13',
          cidade: 'Poxoréu'
        },
        {
          estado_id: '13',
          cidade: 'Querência'
        },
        {
          estado_id: '13',
          cidade: 'Reserva do Cabaçal'
        },
        {
          estado_id: '13',
          cidade: 'Ribeirão Cascalheira'
        },
        {
          estado_id: '13',
          cidade: 'Ribeirãozinho'
        },
        {
          estado_id: '13',
          cidade: 'Rio Branco'
        },
        {
          estado_id: '13',
          cidade: 'Rondolândia'
        },
        {
          estado_id: '13',
          cidade: 'Rosário Oeste'
        },
        {
          estado_id: '13',
          cidade: 'Salto do Céu'
        },
        {
          estado_id: '13',
          cidade: 'Santa Cruz do Xingu'
        },
        {
          estado_id: '13',
          cidade: 'Santa Rita do Trivelato'
        },
        {
          estado_id: '13',
          cidade: 'Santa Terezinha'
        },
        {
          estado_id: '13',
          cidade: 'Santo Afonso'
        },
        {
          estado_id: '13',
          cidade: 'Santo Antônio do Leste'
        },
        {
          estado_id: '13',
          cidade: 'Santo Antônio do Leverger'
        },
        {
          estado_id: '13',
          cidade: 'São Félix do Araguaia'
        },
        {
          estado_id: '13',
          cidade: 'São José do Povo'
        },
        {
          estado_id: '13',
          cidade: 'São José do Xingu'
        },
        {
          estado_id: '13',
          cidade: 'São José dos Quatro Marcos'
        },
        {
          estado_id: '13',
          cidade: 'São Pedro da Cipa'
        },
        {
          estado_id: '13',
          cidade: 'Sapezal'
        },
        {
          estado_id: '13',
          cidade: 'Serra Nova Dourada'
        },
        {
          estado_id: '13',
          cidade: 'Tabaporã'
        },
        {
          estado_id: '13',
          cidade: 'Tapurah'
        },
        {
          estado_id: '13',
          cidade: 'Terra Nova do Norte'
        },
        {
          estado_id: '13',
          cidade: 'Tesouro'
        },
        {
          estado_id: '13',
          cidade: 'Torixoréu'
        },
        {
          estado_id: '13',
          cidade: 'União do Sul'
        },
        {
          estado_id: '13',
          cidade: 'Vale de São Domingos'
        },
        {
          estado_id: '13',
          cidade: 'Vera'
        },
        {
          estado_id: '13',
          cidade: 'Vila Bela da Santíssima Trindade'
        },
        {
          estado_id: '13',
          cidade: 'Vila Rica'
        },
        {
          estado_id: '13',
          cidade: 'Nossa Senhora do Livramento'
        },
        {
          estado_id: '13',
          cidade: 'Santa Carmem'
        },
        {
          estado_id: '13',
          cidade: 'Diamantino'
        },
        {
          estado_id: '13',
          cidade: 'Rondonópolis'
        },
        {
          estado_id: '13',
          cidade: 'Nova Mutum'
        },
        {
          estado_id: '13',
          cidade: 'Sinop'
        },
        {
          estado_id: '13',
          cidade: 'Alto Paraguai'
        },
        {
          estado_id: '13',
          cidade: 'Várzea Grande'
        },
        {
          estado_id: '13',
          cidade: 'Nortelândia'
        },
        {
          estado_id: '13',
          cidade: 'Primavera do Leste'
        },
        {
          estado_id: '13',
          cidade: 'Cuiabá'
        },
        {
          estado_id: '13',
          cidade: 'Campo Verde'
        },
        {
          estado_id: '13',
          cidade: 'Lucas do Rio Verde'
        },
        {
          estado_id: '13',
          cidade: 'Sorriso'
        },
        {
          estado_id: '13',
          cidade: 'Campo Novo do Parecis'
        },
        {
          estado_id: '13',
          cidade: 'Tangará da Serra'
        },
        {
          estado_id: '13',
          cidade: 'Cáceres'
        },
        {
          estado_id: '13',
          cidade: 'Arenápolis'
        },
        {
          estado_id: '13',
          cidade: 'São José do Rio Claro'
        },
        {
          estado_id: '14',
          cidade: 'Abaetetuba'
        },
        {
          estado_id: '14',
          cidade: 'Abel Figueiredo'
        },
        {
          estado_id: '14',
          cidade: 'Acará'
        },
        {
          estado_id: '14',
          cidade: 'Afuá'
        },
        {
          estado_id: '14',
          cidade: 'Água Azul do Norte'
        },
        {
          estado_id: '14',
          cidade: 'Alenquer'
        },
        {
          estado_id: '14',
          cidade: 'Almeirim'
        },
        {
          estado_id: '14',
          cidade: 'Altamira'
        },
        {
          estado_id: '14',
          cidade: 'Anajás'
        },
        {
          estado_id: '14',
          cidade: 'Anapu'
        },
        {
          estado_id: '14',
          cidade: 'Augusto Corrêa'
        },
        {
          estado_id: '14',
          cidade: 'Aurora do Pará'
        },
        {
          estado_id: '14',
          cidade: 'Aveiro'
        },
        {
          estado_id: '14',
          cidade: 'Bagre'
        },
        {
          estado_id: '14',
          cidade: 'Baião'
        },
        {
          estado_id: '14',
          cidade: 'Bannach'
        },
        {
          estado_id: '14',
          cidade: 'Belterra'
        },
        {
          estado_id: '14',
          cidade: 'Benevides'
        },
        {
          estado_id: '14',
          cidade: 'Bom Jesus do Tocantins'
        },
        {
          estado_id: '14',
          cidade: 'Bonito'
        },
        {
          estado_id: '14',
          cidade: 'Bragança'
        },
        {
          estado_id: '14',
          cidade: 'Brasil Novo'
        },
        {
          estado_id: '14',
          cidade: 'Brejo Grande do Araguaia'
        },
        {
          estado_id: '14',
          cidade: 'Breu Branco'
        },
        {
          estado_id: '14',
          cidade: 'Breves'
        },
        {
          estado_id: '14',
          cidade: 'Bujaru'
        },
        {
          estado_id: '14',
          cidade: 'Cachoeira do Arari'
        },
        {
          estado_id: '14',
          cidade: 'Cachoeira do Piriá'
        },
        {
          estado_id: '14',
          cidade: 'Cametá'
        },
        {
          estado_id: '14',
          cidade: 'Canaã dos Carajás'
        },
        {
          estado_id: '14',
          cidade: 'Capanema'
        },
        {
          estado_id: '14',
          cidade: 'Capitão Poço'
        },
        {
          estado_id: '14',
          cidade: 'Chaves'
        },
        {
          estado_id: '14',
          cidade: 'Colares'
        },
        {
          estado_id: '14',
          cidade: 'Conceição do Araguaia'
        },
        {
          estado_id: '14',
          cidade: 'Concórdia do Pará'
        },
        {
          estado_id: '14',
          cidade: 'Cumaru do Norte'
        },
        {
          estado_id: '14',
          cidade: 'Curionópolis'
        },
        {
          estado_id: '14',
          cidade: 'Curralinho'
        },
        {
          estado_id: '14',
          cidade: 'Curuá'
        },
        {
          estado_id: '14',
          cidade: 'Curuçá'
        },
        {
          estado_id: '14',
          cidade: 'Dom Eliseu'
        },
        {
          estado_id: '14',
          cidade: 'Eldorado do Carajás'
        },
        {
          estado_id: '14',
          cidade: 'Faro'
        },
        {
          estado_id: '14',
          cidade: 'Floresta do Araguaia'
        },
        {
          estado_id: '14',
          cidade: 'Garrafão do Norte'
        },
        {
          estado_id: '14',
          cidade: 'Goianésia do Pará'
        },
        {
          estado_id: '14',
          cidade: 'Gurupá'
        },
        {
          estado_id: '14',
          cidade: 'Igarapé-Açu'
        },
        {
          estado_id: '14',
          cidade: 'Igarapé-Miri'
        },
        {
          estado_id: '14',
          cidade: 'Ipixuna do Pará'
        },
        {
          estado_id: '14',
          cidade: 'Irituia'
        },
        {
          estado_id: '14',
          cidade: 'Itaituba'
        },
        {
          estado_id: '14',
          cidade: 'Itupiranga'
        },
        {
          estado_id: '14',
          cidade: 'Jacareacanga'
        },
        {
          estado_id: '14',
          cidade: 'Jacundá'
        },
        {
          estado_id: '14',
          cidade: 'Juruti'
        },
        {
          estado_id: '14',
          cidade: 'Limoeiro do Ajuru'
        },
        {
          estado_id: '14',
          cidade: 'Mãe do Rio'
        },
        {
          estado_id: '14',
          cidade: 'Magalhães Barata'
        },
        {
          estado_id: '14',
          cidade: 'Marabá'
        },
        {
          estado_id: '14',
          cidade: 'Maracanã'
        },
        {
          estado_id: '14',
          cidade: 'Marapanim'
        },
        {
          estado_id: '14',
          cidade: 'Medicilândia'
        },
        {
          estado_id: '14',
          cidade: 'Melgaço'
        },
        {
          estado_id: '14',
          cidade: 'Mocajuba'
        },
        {
          estado_id: '14',
          cidade: 'Moju'
        },
        {
          estado_id: '14',
          cidade: 'Mojuí dos Campos'
        },
        {
          estado_id: '14',
          cidade: 'Monte Alegre'
        },
        {
          estado_id: '14',
          cidade: 'Muaná'
        },
        {
          estado_id: '14',
          cidade: 'Nova Esperança do Piriá'
        },
        {
          estado_id: '14',
          cidade: 'Nova Ipixuna'
        },
        {
          estado_id: '14',
          cidade: 'Nova Timboteua'
        },
        {
          estado_id: '14',
          cidade: 'Novo Progresso'
        },
        {
          estado_id: '14',
          cidade: 'Novo Repartimento'
        },
        {
          estado_id: '14',
          cidade: 'Óbidos'
        },
        {
          estado_id: '14',
          cidade: 'Oeiras do Pará'
        },
        {
          estado_id: '14',
          cidade: 'Oriximiná'
        },
        {
          estado_id: '14',
          cidade: 'Ourém'
        },
        {
          estado_id: '14',
          cidade: 'Ourilândia do Norte'
        },
        {
          estado_id: '14',
          cidade: 'Pacajá'
        },
        {
          estado_id: '14',
          cidade: 'Palestina do Pará'
        },
        {
          estado_id: '14',
          cidade: 'Paragominas'
        },
        {
          estado_id: '14',
          cidade: 'Parauapebas'
        },
        {
          estado_id: '14',
          cidade: 'Pau d Arco'
        },
        {
          estado_id: '14',
          cidade: 'Peixe-Boi'
        },
        {
          estado_id: '14',
          cidade: 'Piçarra'
        },
        {
          estado_id: '14',
          cidade: 'Placas'
        },
        {
          estado_id: '14',
          cidade: 'Portel'
        },
        {
          estado_id: '14',
          cidade: 'Porto de Moz'
        },
        {
          estado_id: '14',
          cidade: 'Prainha'
        },
        {
          estado_id: '14',
          cidade: 'Primavera'
        },
        {
          estado_id: '14',
          cidade: 'Quatipuru'
        },
        {
          estado_id: '14',
          cidade: 'Redenção'
        },
        {
          estado_id: '14',
          cidade: 'Rio Maria'
        },
        {
          estado_id: '14',
          cidade: 'Rondon do Pará'
        },
        {
          estado_id: '14',
          cidade: 'Rurópolis'
        },
        {
          estado_id: '14',
          cidade: 'Salinópolis'
        },
        {
          estado_id: '14',
          cidade: 'Salvaterra'
        },
        {
          estado_id: '14',
          cidade: 'Santa Bárbara do Pará'
        },
        {
          estado_id: '14',
          cidade: 'Santa Cruz do Arari'
        },
        {
          estado_id: '14',
          cidade: 'Santa Izabel do Pará'
        },
        {
          estado_id: '14',
          cidade: 'Santa Luzia do Pará'
        },
        {
          estado_id: '14',
          cidade: 'Santa Maria das Barreiras'
        },
        {
          estado_id: '14',
          cidade: 'Santa Maria do Pará'
        },
        {
          estado_id: '14',
          cidade: 'Santana do Araguaia'
        },
        {
          estado_id: '14',
          cidade: 'Santarém'
        },
        {
          estado_id: '14',
          cidade: 'Santarém Novo'
        },
        {
          estado_id: '14',
          cidade: 'Santo Antônio do Tauá'
        },
        {
          estado_id: '14',
          cidade: 'São Caetano de Odivelas'
        },
        {
          estado_id: '14',
          cidade: 'São Domingos do Araguaia'
        },
        {
          estado_id: '14',
          cidade: 'São Domingos do Capim'
        },
        {
          estado_id: '14',
          cidade: 'São Félix do Xingu'
        },
        {
          estado_id: '14',
          cidade: 'São Geraldo do Araguaia'
        },
        {
          estado_id: '14',
          cidade: 'São João da Ponta'
        },
        {
          estado_id: '14',
          cidade: 'São João de Pirabas'
        },
        {
          estado_id: '14',
          cidade: 'São João do Araguaia'
        },
        {
          estado_id: '14',
          cidade: 'São Miguel do Guamá'
        },
        {
          estado_id: '14',
          cidade: 'São Sebastião da Boa Vista'
        },
        {
          estado_id: '14',
          cidade: 'Sapucaia'
        },
        {
          estado_id: '14',
          cidade: 'Senador José Porfírio'
        },
        {
          estado_id: '14',
          cidade: 'Soure'
        },
        {
          estado_id: '14',
          cidade: 'Tailândia'
        },
        {
          estado_id: '14',
          cidade: 'Terra Santa'
        },
        {
          estado_id: '14',
          cidade: 'Tomé-Açu'
        },
        {
          estado_id: '14',
          cidade: 'Tracuateua'
        },
        {
          estado_id: '14',
          cidade: 'Trairão'
        },
        {
          estado_id: '14',
          cidade: 'Tucumã'
        },
        {
          estado_id: '14',
          cidade: 'Tucuruí'
        },
        {
          estado_id: '14',
          cidade: 'Ulianópolis'
        },
        {
          estado_id: '14',
          cidade: 'Uruará'
        },
        {
          estado_id: '14',
          cidade: 'Vigia'
        },
        {
          estado_id: '14',
          cidade: 'Viseu'
        },
        {
          estado_id: '14',
          cidade: 'Vitória do Xingu'
        },
        {
          estado_id: '14',
          cidade: 'Xinguara'
        },
        {
          estado_id: '14',
          cidade: 'São Francisco do Pará'
        },
        {
          estado_id: '14',
          cidade: 'Marituba'
        },
        {
          estado_id: '14',
          cidade: 'Ponta de Pedras'
        },
        {
          estado_id: '14',
          cidade: 'Terra Alta'
        },
        {
          estado_id: '14',
          cidade: 'Ananindeua'
        },
        {
          estado_id: '14',
          cidade: 'Inhangapi'
        },
        {
          estado_id: '14',
          cidade: 'Barcarena'
        },
        {
          estado_id: '14',
          cidade: 'Belém'
        },
        {
          estado_id: '14',
          cidade: 'Castanhal'
        },
        {
          estado_id: '15',
          cidade: 'Água Branca'
        },
        {
          estado_id: '15',
          cidade: 'Aguiar'
        },
        {
          estado_id: '15',
          cidade: 'Alagoa Grande'
        },
        {
          estado_id: '15',
          cidade: 'Alagoa Nova'
        },
        {
          estado_id: '15',
          cidade: 'Alagoinha'
        },
        {
          estado_id: '15',
          cidade: 'Alcantil'
        },
        {
          estado_id: '15',
          cidade: 'Algodão de Jandaíra'
        },
        {
          estado_id: '15',
          cidade: 'Amparo'
        },
        {
          estado_id: '15',
          cidade: 'Aparecida'
        },
        {
          estado_id: '15',
          cidade: 'Araçagi'
        },
        {
          estado_id: '15',
          cidade: 'Arara'
        },
        {
          estado_id: '15',
          cidade: 'Araruna'
        },
        {
          estado_id: '15',
          cidade: 'Areia'
        },
        {
          estado_id: '15',
          cidade: 'Areia de Baraúnas'
        },
        {
          estado_id: '15',
          cidade: 'Areial'
        },
        {
          estado_id: '15',
          cidade: 'Aroeiras'
        },
        {
          estado_id: '15',
          cidade: 'Assunção'
        },
        {
          estado_id: '15',
          cidade: 'Baía da Traição'
        },
        {
          estado_id: '15',
          cidade: 'Bananeiras'
        },
        {
          estado_id: '15',
          cidade: 'Baraúna'
        },
        {
          estado_id: '15',
          cidade: 'Barra de Santa Rosa'
        },
        {
          estado_id: '15',
          cidade: 'Barra de Santana'
        },
        {
          estado_id: '15',
          cidade: 'Barra de São Miguel'
        },
        {
          estado_id: '15',
          cidade: 'Belém'
        },
        {
          estado_id: '15',
          cidade: 'Belém do Brejo do Cruz'
        },
        {
          estado_id: '15',
          cidade: 'Bernardino Batista'
        },
        {
          estado_id: '15',
          cidade: 'Boa Ventura'
        },
        {
          estado_id: '15',
          cidade: 'Boa Vista'
        },
        {
          estado_id: '15',
          cidade: 'Bom Jesus'
        },
        {
          estado_id: '15',
          cidade: 'Bom Sucesso'
        },
        {
          estado_id: '15',
          cidade: 'Bonito de Santa Fé'
        },
        {
          estado_id: '15',
          cidade: 'Boqueirão'
        },
        {
          estado_id: '15',
          cidade: 'Borborema'
        },
        {
          estado_id: '15',
          cidade: 'Brejo do Cruz'
        },
        {
          estado_id: '15',
          cidade: 'Brejo dos Santos'
        },
        {
          estado_id: '15',
          cidade: 'Caaporã'
        },
        {
          estado_id: '15',
          cidade: 'Cabaceiras'
        },
        {
          estado_id: '15',
          cidade: 'Cachoeira dos Índios'
        },
        {
          estado_id: '15',
          cidade: 'Cacimba de Areia'
        },
        {
          estado_id: '15',
          cidade: 'Cacimba de Dentro'
        },
        {
          estado_id: '15',
          cidade: 'Cacimbas'
        },
        {
          estado_id: '15',
          cidade: 'Caiçara'
        },
        {
          estado_id: '15',
          cidade: 'Cajazeiras'
        },
        {
          estado_id: '15',
          cidade: 'Cajazeirinhas'
        },
        {
          estado_id: '15',
          cidade: 'Caldas Brandão'
        },
        {
          estado_id: '15',
          cidade: 'Camalaú'
        },
        {
          estado_id: '15',
          cidade: 'Campina Grande'
        },
        {
          estado_id: '15',
          cidade: 'Capim'
        },
        {
          estado_id: '15',
          cidade: 'Caraúbas'
        },
        {
          estado_id: '15',
          cidade: 'Carrapateira'
        },
        {
          estado_id: '15',
          cidade: 'Casserengue'
        },
        {
          estado_id: '15',
          cidade: 'Catingueira'
        },
        {
          estado_id: '15',
          cidade: 'Catolé do Rocha'
        },
        {
          estado_id: '15',
          cidade: 'Caturité'
        },
        {
          estado_id: '15',
          cidade: 'Conceição'
        },
        {
          estado_id: '15',
          cidade: 'Condado'
        },
        {
          estado_id: '15',
          cidade: 'Congo'
        },
        {
          estado_id: '15',
          cidade: 'Coremas'
        },
        {
          estado_id: '15',
          cidade: 'Coxixola'
        },
        {
          estado_id: '15',
          cidade: 'Cubati'
        },
        {
          estado_id: '15',
          cidade: 'Cuité'
        },
        {
          estado_id: '15',
          cidade: 'Cuité de Mamanguape'
        },
        {
          estado_id: '15',
          cidade: 'Cuitegi'
        },
        {
          estado_id: '15',
          cidade: 'Curral de Cima'
        },
        {
          estado_id: '15',
          cidade: 'Curral Velho'
        },
        {
          estado_id: '15',
          cidade: 'Damião'
        },
        {
          estado_id: '15',
          cidade: 'Desterro'
        },
        {
          estado_id: '15',
          cidade: 'Diamante'
        },
        {
          estado_id: '15',
          cidade: 'Dona Inês'
        },
        {
          estado_id: '15',
          cidade: 'Duas Estradas'
        },
        {
          estado_id: '15',
          cidade: 'Emas'
        },
        {
          estado_id: '15',
          cidade: 'Esperança'
        },
        {
          estado_id: '15',
          cidade: 'Fagundes'
        },
        {
          estado_id: '15',
          cidade: 'Frei Martinho'
        },
        {
          estado_id: '15',
          cidade: 'Gado Bravo'
        },
        {
          estado_id: '15',
          cidade: 'Guarabira'
        },
        {
          estado_id: '15',
          cidade: 'Gurinhém'
        },
        {
          estado_id: '15',
          cidade: 'Gurjão'
        },
        {
          estado_id: '15',
          cidade: 'Ibiara'
        },
        {
          estado_id: '15',
          cidade: 'Igaracy'
        },
        {
          estado_id: '15',
          cidade: 'Imaculada'
        },
        {
          estado_id: '15',
          cidade: 'Ingá'
        },
        {
          estado_id: '15',
          cidade: 'Itabaiana'
        },
        {
          estado_id: '15',
          cidade: 'Itaporanga'
        },
        {
          estado_id: '15',
          cidade: 'Itapororoca'
        },
        {
          estado_id: '15',
          cidade: 'Itatuba'
        },
        {
          estado_id: '15',
          cidade: 'Jacaraú'
        },
        {
          estado_id: '15',
          cidade: 'Jericó'
        },
        {
          estado_id: '15',
          cidade: 'Joca Claudino'
        },
        {
          estado_id: '15',
          cidade: 'Juarez Távora'
        },
        {
          estado_id: '15',
          cidade: 'Juazeirinho'
        },
        {
          estado_id: '15',
          cidade: 'Junco do Seridó'
        },
        {
          estado_id: '15',
          cidade: 'Juripiranga'
        },
        {
          estado_id: '15',
          cidade: 'Juru'
        },
        {
          estado_id: '15',
          cidade: 'Lagoa'
        },
        {
          estado_id: '15',
          cidade: 'Lagoa de Dentro'
        },
        {
          estado_id: '15',
          cidade: 'Lagoa Seca'
        },
        {
          estado_id: '15',
          cidade: 'Lastro'
        },
        {
          estado_id: '15',
          cidade: 'Livramento'
        },
        {
          estado_id: '15',
          cidade: 'Logradouro'
        },
        {
          estado_id: '15',
          cidade: 'Mãe d Água'
        },
        {
          estado_id: '15',
          cidade: 'Malta'
        },
        {
          estado_id: '15',
          cidade: 'Mamanguape'
        },
        {
          estado_id: '15',
          cidade: 'Manaíra'
        },
        {
          estado_id: '15',
          cidade: 'Marcação'
        },
        {
          estado_id: '15',
          cidade: 'Mari'
        },
        {
          estado_id: '15',
          cidade: 'Marizópolis'
        },
        {
          estado_id: '15',
          cidade: 'Massaranduba'
        },
        {
          estado_id: '15',
          cidade: 'Mataraca'
        },
        {
          estado_id: '15',
          cidade: 'Matinhas'
        },
        {
          estado_id: '15',
          cidade: 'Mato Grosso'
        },
        {
          estado_id: '15',
          cidade: 'Maturéia'
        },
        {
          estado_id: '15',
          cidade: 'Mogeiro'
        },
        {
          estado_id: '15',
          cidade: 'Montadas'
        },
        {
          estado_id: '15',
          cidade: 'Monte Horebe'
        },
        {
          estado_id: '15',
          cidade: 'Monteiro'
        },
        {
          estado_id: '15',
          cidade: 'Mulungu'
        },
        {
          estado_id: '15',
          cidade: 'Natuba'
        },
        {
          estado_id: '15',
          cidade: 'Nazarezinho'
        },
        {
          estado_id: '15',
          cidade: 'Nova Floresta'
        },
        {
          estado_id: '15',
          cidade: 'Nova Olinda'
        },
        {
          estado_id: '15',
          cidade: 'Nova Palmeira'
        },
        {
          estado_id: '15',
          cidade: 'Olho d Água'
        },
        {
          estado_id: '15',
          cidade: 'Olivedos'
        },
        {
          estado_id: '15',
          cidade: 'Ouro Velho'
        },
        {
          estado_id: '15',
          cidade: 'Parari'
        },
        {
          estado_id: '15',
          cidade: 'Passagem'
        },
        {
          estado_id: '15',
          cidade: 'Patos'
        },
        {
          estado_id: '15',
          cidade: 'Paulista'
        },
        {
          estado_id: '15',
          cidade: 'Pedra Branca'
        },
        {
          estado_id: '15',
          cidade: 'Pedra Lavrada'
        },
        {
          estado_id: '15',
          cidade: 'Pedro Régis'
        },
        {
          estado_id: '15',
          cidade: 'Piancó'
        },
        {
          estado_id: '15',
          cidade: 'Picuí'
        },
        {
          estado_id: '15',
          cidade: 'Pilar'
        },
        {
          estado_id: '15',
          cidade: 'Pilões'
        },
        {
          estado_id: '15',
          cidade: 'Pilõezinhos'
        },
        {
          estado_id: '15',
          cidade: 'Pirpirituba'
        },
        {
          estado_id: '15',
          cidade: 'Pitimbu'
        },
        {
          estado_id: '15',
          cidade: 'Pocinhos'
        },
        {
          estado_id: '15',
          cidade: 'Poço Dantas'
        },
        {
          estado_id: '15',
          cidade: 'Poço de José de Moura'
        },
        {
          estado_id: '15',
          cidade: 'Pombal'
        },
        {
          estado_id: '15',
          cidade: 'Prata'
        },
        {
          estado_id: '15',
          cidade: 'Princesa Isabel'
        },
        {
          estado_id: '15',
          cidade: 'Puxinanã'
        },
        {
          estado_id: '15',
          cidade: 'Queimadas'
        },
        {
          estado_id: '15',
          cidade: 'Quixabá'
        },
        {
          estado_id: '15',
          cidade: 'Remígio'
        },
        {
          estado_id: '15',
          cidade: 'Riachão'
        },
        {
          estado_id: '15',
          cidade: 'Riachão do Bacamarte'
        },
        {
          estado_id: '15',
          cidade: 'Riachão do Poço'
        },
        {
          estado_id: '15',
          cidade: 'Riacho de Santo Antônio'
        },
        {
          estado_id: '15',
          cidade: 'Riacho dos Cavalos'
        },
        {
          estado_id: '15',
          cidade: 'Rio Tinto'
        },
        {
          estado_id: '15',
          cidade: 'Salgadinho'
        },
        {
          estado_id: '15',
          cidade: 'Salgado de São Félix'
        },
        {
          estado_id: '15',
          cidade: 'Santa Cecília'
        },
        {
          estado_id: '15',
          cidade: 'Santa Cruz'
        },
        {
          estado_id: '15',
          cidade: 'Santa Helena'
        },
        {
          estado_id: '15',
          cidade: 'Santa Inês'
        },
        {
          estado_id: '15',
          cidade: 'Santa Luzia'
        },
        {
          estado_id: '15',
          cidade: 'Santa Teresinha'
        },
        {
          estado_id: '15',
          cidade: 'Santana de Mangueira'
        },
        {
          estado_id: '15',
          cidade: 'Santana dos Garrotes'
        },
        {
          estado_id: '15',
          cidade: 'Santo André'
        },
        {
          estado_id: '15',
          cidade: 'São Bentinho'
        },
        {
          estado_id: '15',
          cidade: 'São Bento'
        },
        {
          estado_id: '15',
          cidade: 'São Domingos'
        },
        {
          estado_id: '15',
          cidade: 'São Domingos do Cariri'
        },
        {
          estado_id: '15',
          cidade: 'São Francisco'
        },
        {
          estado_id: '15',
          cidade: 'São João do Cariri'
        },
        {
          estado_id: '15',
          cidade: 'São João do Rio do Peixe'
        },
        {
          estado_id: '15',
          cidade: 'São João do Tigre'
        },
        {
          estado_id: '15',
          cidade: 'São José da Lagoa Tapada'
        },
        {
          estado_id: '15',
          cidade: 'São José de Caiana'
        },
        {
          estado_id: '15',
          cidade: 'São José de Espinharas'
        },
        {
          estado_id: '15',
          cidade: 'São José de Piranhas'
        },
        {
          estado_id: '15',
          cidade: 'São José de Princesa'
        },
        {
          estado_id: '15',
          cidade: 'São José do Bonfim'
        },
        {
          estado_id: '15',
          cidade: 'São José do Brejo do Cruz'
        },
        {
          estado_id: '15',
          cidade: 'São José do Sabugi'
        },
        {
          estado_id: '15',
          cidade: 'São José dos Cordeiros'
        },
        {
          estado_id: '15',
          cidade: 'São José dos Ramos'
        },
        {
          estado_id: '15',
          cidade: 'São Mamede'
        },
        {
          estado_id: '15',
          cidade: 'São Miguel de Taipu'
        },
        {
          estado_id: '15',
          cidade: 'São Sebastião de Lagoa de Roça'
        },
        {
          estado_id: '15',
          cidade: 'São Sebastião do Umbuzeiro'
        },
        {
          estado_id: '15',
          cidade: 'São Vicente do Seridó'
        },
        {
          estado_id: '15',
          cidade: 'Serra Branca'
        },
        {
          estado_id: '15',
          cidade: 'Serra da Raiz'
        },
        {
          estado_id: '15',
          cidade: 'Serra Grande'
        },
        {
          estado_id: '15',
          cidade: 'Serra Redonda'
        },
        {
          estado_id: '15',
          cidade: 'Serraria'
        },
        {
          estado_id: '15',
          cidade: 'Sertãozinho'
        },
        {
          estado_id: '15',
          cidade: 'Sobrado'
        },
        {
          estado_id: '15',
          cidade: 'Solânea'
        },
        {
          estado_id: '15',
          cidade: 'Soledade'
        },
        {
          estado_id: '15',
          cidade: 'Sossêgo'
        },
        {
          estado_id: '15',
          cidade: 'Sousa'
        },
        {
          estado_id: '15',
          cidade: 'Sumé'
        },
        {
          estado_id: '15',
          cidade: 'Tacima'
        },
        {
          estado_id: '15',
          cidade: 'Taperoá'
        },
        {
          estado_id: '15',
          cidade: 'Tavares'
        },
        {
          estado_id: '15',
          cidade: 'Teixeira'
        },
        {
          estado_id: '15',
          cidade: 'Tenório'
        },
        {
          estado_id: '15',
          cidade: 'Triunfo'
        },
        {
          estado_id: '15',
          cidade: 'Uiraúna'
        },
        {
          estado_id: '15',
          cidade: 'Umbuzeiro'
        },
        {
          estado_id: '15',
          cidade: 'Várzea'
        },
        {
          estado_id: '15',
          cidade: 'Vieirópolis'
        },
        {
          estado_id: '15',
          cidade: 'Vista Serrana'
        },
        {
          estado_id: '15',
          cidade: 'Zabelê'
        },
        {
          estado_id: '15',
          cidade: 'Sapé'
        },
        {
          estado_id: '15',
          cidade: 'Pedras de Fogo'
        },
        {
          estado_id: '15',
          cidade: 'Alhandra'
        },
        {
          estado_id: '15',
          cidade: 'Cruz do Espírito Santo'
        },
        {
          estado_id: '15',
          cidade: 'Lucena'
        },
        {
          estado_id: '15',
          cidade: 'Conde'
        },
        {
          estado_id: '15',
          cidade: 'Santa Rita'
        },
        {
          estado_id: '15',
          cidade: 'Bayeux'
        },
        {
          estado_id: '15',
          cidade: 'Cabedelo'
        },
        {
          estado_id: '15',
          cidade: 'João Pessoa'
        },
        {
          estado_id: '16',
          cidade: 'Sirinhaém'
        },
        {
          estado_id: '16',
          cidade: 'Glória do Goitá'
        },
        {
          estado_id: '16',
          cidade: 'Jaboatão dos Guararapes'
        },
        {
          estado_id: '16',
          cidade: 'Afogados da Ingazeira'
        },
        {
          estado_id: '16',
          cidade: 'Afrânio'
        },
        {
          estado_id: '16',
          cidade: 'Agrestina'
        },
        {
          estado_id: '16',
          cidade: 'Água Preta'
        },
        {
          estado_id: '16',
          cidade: 'Águas Belas'
        },
        {
          estado_id: '16',
          cidade: 'Alagoinha'
        },
        {
          estado_id: '16',
          cidade: 'Aliança'
        },
        {
          estado_id: '16',
          cidade: 'Altinho'
        },
        {
          estado_id: '16',
          cidade: 'Amaraji'
        },
        {
          estado_id: '16',
          cidade: 'Angelim'
        },
        {
          estado_id: '16',
          cidade: 'Araripina'
        },
        {
          estado_id: '16',
          cidade: 'Arcoverde'
        },
        {
          estado_id: '16',
          cidade: 'Barra de Guabiraba'
        },
        {
          estado_id: '16',
          cidade: 'Barreiros'
        },
        {
          estado_id: '16',
          cidade: 'Belém de Maria'
        },
        {
          estado_id: '16',
          cidade: 'Belém do São Francisco'
        },
        {
          estado_id: '16',
          cidade: 'Betânia'
        },
        {
          estado_id: '16',
          cidade: 'Bezerros'
        },
        {
          estado_id: '16',
          cidade: 'Bodocó'
        },
        {
          estado_id: '16',
          cidade: 'Bom Conselho'
        },
        {
          estado_id: '16',
          cidade: 'Bom Jardim'
        },
        {
          estado_id: '16',
          cidade: 'Bonito'
        },
        {
          estado_id: '16',
          cidade: 'Brejão'
        },
        {
          estado_id: '16',
          cidade: 'Brejinho'
        },
        {
          estado_id: '16',
          cidade: 'Brejo da Madre de Deus'
        },
        {
          estado_id: '16',
          cidade: 'Buenos Aires'
        },
        {
          estado_id: '16',
          cidade: 'Buíque'
        },
        {
          estado_id: '16',
          cidade: 'Cabrobó'
        },
        {
          estado_id: '16',
          cidade: 'Cachoeirinha'
        },
        {
          estado_id: '16',
          cidade: 'Caetés'
        },
        {
          estado_id: '16',
          cidade: 'Calçado'
        },
        {
          estado_id: '16',
          cidade: 'Calumbi'
        },
        {
          estado_id: '16',
          cidade: 'Camocim de São Félix'
        },
        {
          estado_id: '16',
          cidade: 'Camutanga'
        },
        {
          estado_id: '16',
          cidade: 'Canhotinho'
        },
        {
          estado_id: '16',
          cidade: 'Capoeiras'
        },
        {
          estado_id: '16',
          cidade: 'Carnaíba'
        },
        {
          estado_id: '16',
          cidade: 'Carnaubeira da Penha'
        },
        {
          estado_id: '16',
          cidade: 'Carpina'
        },
        {
          estado_id: '16',
          cidade: 'Casinhas'
        },
        {
          estado_id: '16',
          cidade: 'Catende'
        },
        {
          estado_id: '16',
          cidade: 'Cedro'
        },
        {
          estado_id: '16',
          cidade: 'Chã de Alegria'
        },
        {
          estado_id: '16',
          cidade: 'Chã Grande'
        },
        {
          estado_id: '16',
          cidade: 'Condado'
        },
        {
          estado_id: '16',
          cidade: 'Correntes'
        },
        {
          estado_id: '16',
          cidade: 'Cortês'
        },
        {
          estado_id: '16',
          cidade: 'Cumaru'
        },
        {
          estado_id: '16',
          cidade: 'Cupira'
        },
        {
          estado_id: '16',
          cidade: 'Custódia'
        },
        {
          estado_id: '16',
          cidade: 'Dormentes'
        },
        {
          estado_id: '16',
          cidade: 'Escada'
        },
        {
          estado_id: '16',
          cidade: 'Exu'
        },
        {
          estado_id: '16',
          cidade: 'Feira Nova'
        },
        {
          estado_id: '16',
          cidade: 'Fernando de Noronha'
        },
        {
          estado_id: '16',
          cidade: 'Ferreiros'
        },
        {
          estado_id: '16',
          cidade: 'Flores'
        },
        {
          estado_id: '16',
          cidade: 'Floresta'
        },
        {
          estado_id: '16',
          cidade: 'Frei Miguelinho'
        },
        {
          estado_id: '16',
          cidade: 'Gameleira'
        },
        {
          estado_id: '16',
          cidade: 'Garanhuns'
        },
        {
          estado_id: '16',
          cidade: 'Goiana'
        },
        {
          estado_id: '16',
          cidade: 'Granito'
        },
        {
          estado_id: '16',
          cidade: 'Gravatá'
        },
        {
          estado_id: '16',
          cidade: 'Iati'
        },
        {
          estado_id: '16',
          cidade: 'Ibimirim'
        },
        {
          estado_id: '16',
          cidade: 'Ibirajuba'
        },
        {
          estado_id: '16',
          cidade: 'Iguaracy'
        },
        {
          estado_id: '16',
          cidade: 'Inajá'
        },
        {
          estado_id: '16',
          cidade: 'Ingazeira'
        },
        {
          estado_id: '16',
          cidade: 'Ipubi'
        },
        {
          estado_id: '16',
          cidade: 'Itacuruba'
        },
        {
          estado_id: '16',
          cidade: 'Itaíba'
        },
        {
          estado_id: '16',
          cidade: 'Itambé'
        },
        {
          estado_id: '16',
          cidade: 'Itapetim'
        },
        {
          estado_id: '16',
          cidade: 'Itaquitinga'
        },
        {
          estado_id: '16',
          cidade: 'Jaqueira'
        },
        {
          estado_id: '16',
          cidade: 'Jataúba'
        },
        {
          estado_id: '16',
          cidade: 'Jatobá'
        },
        {
          estado_id: '16',
          cidade: 'João Alfredo'
        },
        {
          estado_id: '16',
          cidade: 'Joaquim Nabuco'
        },
        {
          estado_id: '16',
          cidade: 'Jucati'
        },
        {
          estado_id: '16',
          cidade: 'Jupi'
        },
        {
          estado_id: '16',
          cidade: 'Jurema'
        },
        {
          estado_id: '16',
          cidade: 'Lagoa de Itaenga'
        },
        {
          estado_id: '16',
          cidade: 'Lagoa do Carro'
        },
        {
          estado_id: '16',
          cidade: 'Lagoa do Ouro'
        },
        {
          estado_id: '16',
          cidade: 'Lagoa dos Gatos'
        },
        {
          estado_id: '16',
          cidade: 'Lagoa Grande'
        },
        {
          estado_id: '16',
          cidade: 'Limoeiro'
        },
        {
          estado_id: '16',
          cidade: 'Macaparana'
        },
        {
          estado_id: '16',
          cidade: 'Machados'
        },
        {
          estado_id: '16',
          cidade: 'Manari'
        },
        {
          estado_id: '16',
          cidade: 'Maraial'
        },
        {
          estado_id: '16',
          cidade: 'Mirandiba'
        },
        {
          estado_id: '16',
          cidade: 'Moreilândia'
        },
        {
          estado_id: '16',
          cidade: 'Nazaré da Mata'
        },
        {
          estado_id: '16',
          cidade: 'Orobó'
        },
        {
          estado_id: '16',
          cidade: 'Orocó'
        },
        {
          estado_id: '16',
          cidade: 'Ouricuri'
        },
        {
          estado_id: '16',
          cidade: 'Palmares'
        },
        {
          estado_id: '16',
          cidade: 'Palmeirina'
        },
        {
          estado_id: '16',
          cidade: 'Panelas'
        },
        {
          estado_id: '16',
          cidade: 'Paranatama'
        },
        {
          estado_id: '16',
          cidade: 'Parnamirim'
        },
        {
          estado_id: '16',
          cidade: 'Passira'
        },
        {
          estado_id: '16',
          cidade: 'Paudalho'
        },
        {
          estado_id: '16',
          cidade: 'Pedra'
        },
        {
          estado_id: '16',
          cidade: 'Pesqueira'
        },
        {
          estado_id: '16',
          cidade: 'Petrolândia'
        },
        {
          estado_id: '16',
          cidade: 'Petrolina'
        },
        {
          estado_id: '16',
          cidade: 'Poção'
        },
        {
          estado_id: '16',
          cidade: 'Pombos'
        },
        {
          estado_id: '16',
          cidade: 'Primavera'
        },
        {
          estado_id: '16',
          cidade: 'Quipapá'
        },
        {
          estado_id: '16',
          cidade: 'Quixaba'
        },
        {
          estado_id: '16',
          cidade: 'Riacho das Almas'
        },
        {
          estado_id: '16',
          cidade: 'Ribeirão'
        },
        {
          estado_id: '16',
          cidade: 'Rio Formoso'
        },
        {
          estado_id: '16',
          cidade: 'Sairé'
        },
        {
          estado_id: '16',
          cidade: 'Salgadinho'
        },
        {
          estado_id: '16',
          cidade: 'Salgueiro'
        },
        {
          estado_id: '16',
          cidade: 'Saloá'
        },
        {
          estado_id: '16',
          cidade: 'Santa Cruz'
        },
        {
          estado_id: '16',
          cidade: 'Santa Cruz da Baixa Verde'
        },
        {
          estado_id: '16',
          cidade: 'Santa Cruz do Capibaribe'
        },
        {
          estado_id: '16',
          cidade: 'Santa Filomena'
        },
        {
          estado_id: '16',
          cidade: 'Santa Maria da Boa Vista'
        },
        {
          estado_id: '16',
          cidade: 'Santa Maria do Cambucá'
        },
        {
          estado_id: '16',
          cidade: 'Santa Terezinha'
        },
        {
          estado_id: '16',
          cidade: 'São Benedito do Sul'
        },
        {
          estado_id: '16',
          cidade: 'São João'
        },
        {
          estado_id: '16',
          cidade: 'São Joaquim do Monte'
        },
        {
          estado_id: '16',
          cidade: 'São José da Coroa Grande'
        },
        {
          estado_id: '16',
          cidade: 'São José do Belmonte'
        },
        {
          estado_id: '16',
          cidade: 'São José do Egito'
        },
        {
          estado_id: '16',
          cidade: 'São Vicente Ferrer'
        },
        {
          estado_id: '16',
          cidade: 'Serra Talhada'
        },
        {
          estado_id: '16',
          cidade: 'Serrita'
        },
        {
          estado_id: '16',
          cidade: 'Sertânia'
        },
        {
          estado_id: '16',
          cidade: 'Solidão'
        },
        {
          estado_id: '16',
          cidade: 'Surubim'
        },
        {
          estado_id: '16',
          cidade: 'Tabira'
        },
        {
          estado_id: '16',
          cidade: 'Tacaratu'
        },
        {
          estado_id: '16',
          cidade: 'Tamandaré'
        },
        {
          estado_id: '16',
          cidade: 'Taquaritinga do Norte'
        },
        {
          estado_id: '16',
          cidade: 'Terezinha'
        },
        {
          estado_id: '16',
          cidade: 'Terra Nova'
        },
        {
          estado_id: '16',
          cidade: 'Timbaúba'
        },
        {
          estado_id: '16',
          cidade: 'Toritama'
        },
        {
          estado_id: '16',
          cidade: 'Tracunhaém'
        },
        {
          estado_id: '16',
          cidade: 'Trindade'
        },
        {
          estado_id: '16',
          cidade: 'Triunfo'
        },
        {
          estado_id: '16',
          cidade: 'Tupanatinga'
        },
        {
          estado_id: '16',
          cidade: 'Tuparetama'
        },
        {
          estado_id: '16',
          cidade: 'Venturosa'
        },
        {
          estado_id: '16',
          cidade: 'Verdejante'
        },
        {
          estado_id: '16',
          cidade: 'Vertente do Lério'
        },
        {
          estado_id: '16',
          cidade: 'Vertentes'
        },
        {
          estado_id: '16',
          cidade: 'Vicência'
        },
        {
          estado_id: '16',
          cidade: 'Vitória de Santo Antão'
        },
        {
          estado_id: '16',
          cidade: 'Xexéu'
        },
        {
          estado_id: '16',
          cidade: 'Lajedo'
        },
        {
          estado_id: '16',
          cidade: 'São Bento do Una'
        },
        {
          estado_id: '16',
          cidade: 'Araçoiaba'
        },
        {
          estado_id: '16',
          cidade: 'Sanharó'
        },
        {
          estado_id: '16',
          cidade: 'São Caetano'
        },
        {
          estado_id: '16',
          cidade: 'Igarassu'
        },
        {
          estado_id: '16',
          cidade: 'Itapissuma'
        },
        {
          estado_id: '16',
          cidade: 'Moreno'
        },
        {
          estado_id: '16',
          cidade: 'Ilha de Itamaracá'
        },
        {
          estado_id: '16',
          cidade: 'Tacaimbó'
        },
        {
          estado_id: '16',
          cidade: 'Olinda'
        },
        {
          estado_id: '16',
          cidade: 'Ipojuca'
        },
        {
          estado_id: '16',
          cidade: 'São Lourenço da Mata'
        },
        {
          estado_id: '16',
          cidade: 'Abreu e Lima'
        },
        {
          estado_id: '16',
          cidade: 'Camaragibe'
        },
        {
          estado_id: '16',
          cidade: 'Paulista'
        },
        {
          estado_id: '16',
          cidade: 'Cabo de Santo Agostinho'
        },
        {
          estado_id: '16',
          cidade: 'Caruaru'
        },
        {
          estado_id: '16',
          cidade: 'Recife'
        },
        {
          estado_id: '16',
          cidade: 'Belo Jardim'
        },
        {
          estado_id: '17',
          cidade: 'Nazária'
        },
        {
          estado_id: '17',
          cidade: 'Acauã'
        },
        {
          estado_id: '17',
          cidade: 'Agricolândia'
        },
        {
          estado_id: '17',
          cidade: 'Água Branca'
        },
        {
          estado_id: '17',
          cidade: 'Alagoinha do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Alegrete do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Alto Longá'
        },
        {
          estado_id: '17',
          cidade: 'Altos'
        },
        {
          estado_id: '17',
          cidade: 'Alvorada do Gurguéia'
        },
        {
          estado_id: '17',
          cidade: 'Amarante'
        },
        {
          estado_id: '17',
          cidade: 'Angical do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Anísio de Abreu'
        },
        {
          estado_id: '17',
          cidade: 'Antônio Almeida'
        },
        {
          estado_id: '17',
          cidade: 'Aroazes'
        },
        {
          estado_id: '17',
          cidade: 'Aroeiras do Itaim'
        },
        {
          estado_id: '17',
          cidade: 'Arraial'
        },
        {
          estado_id: '17',
          cidade: 'Assunção do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Avelino Lopes'
        },
        {
          estado_id: '17',
          cidade: 'Baixa Grande do Ribeiro'
        },
        {
          estado_id: '17',
          cidade: 'Barra d Alcântara'
        },
        {
          estado_id: '17',
          cidade: 'Barras'
        },
        {
          estado_id: '17',
          cidade: 'Barreiras do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Barro Duro'
        },
        {
          estado_id: '17',
          cidade: 'Batalha'
        },
        {
          estado_id: '17',
          cidade: 'Bela Vista do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Belém do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Beneditinos'
        },
        {
          estado_id: '17',
          cidade: 'Bertolínia'
        },
        {
          estado_id: '17',
          cidade: 'Betânia do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Boa Hora'
        },
        {
          estado_id: '17',
          cidade: 'Bocaina'
        },
        {
          estado_id: '17',
          cidade: 'Bom Jesus'
        },
        {
          estado_id: '17',
          cidade: 'Bom Princípio do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Bonfim do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Boqueirão do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Brasileira'
        },
        {
          estado_id: '17',
          cidade: 'Brejo do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Buriti dos Lopes'
        },
        {
          estado_id: '17',
          cidade: 'Buriti dos Montes'
        },
        {
          estado_id: '17',
          cidade: 'Cabeceiras do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Cajazeiras do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Cajueiro da Praia'
        },
        {
          estado_id: '17',
          cidade: 'Caldeirão Grande do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Campinas do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Campo Alegre do Fidalgo'
        },
        {
          estado_id: '17',
          cidade: 'Campo Grande do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Campo Largo do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Campo Maior'
        },
        {
          estado_id: '17',
          cidade: 'Canavieira'
        },
        {
          estado_id: '17',
          cidade: 'Canto do Buriti'
        },
        {
          estado_id: '17',
          cidade: 'Capitão de Campos'
        },
        {
          estado_id: '17',
          cidade: 'Capitão Gervásio Oliveira'
        },
        {
          estado_id: '17',
          cidade: 'Caracol'
        },
        {
          estado_id: '17',
          cidade: 'Caraúbas do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Caridade do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Castelo do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Caxingó'
        },
        {
          estado_id: '17',
          cidade: 'Cocal'
        },
        {
          estado_id: '17',
          cidade: 'Cocal de Telha'
        },
        {
          estado_id: '17',
          cidade: 'Cocal dos Alves'
        },
        {
          estado_id: '17',
          cidade: 'Coivaras'
        },
        {
          estado_id: '17',
          cidade: 'Colônia do Gurguéia'
        },
        {
          estado_id: '17',
          cidade: 'Colônia do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Conceição do Canindé'
        },
        {
          estado_id: '17',
          cidade: 'Coronel José Dias'
        },
        {
          estado_id: '17',
          cidade: 'Corrente'
        },
        {
          estado_id: '17',
          cidade: 'Cristalândia do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Cristino Castro'
        },
        {
          estado_id: '17',
          cidade: 'Curimatá'
        },
        {
          estado_id: '17',
          cidade: 'Currais'
        },
        {
          estado_id: '17',
          cidade: 'Curral Novo do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Curralinhos'
        },
        {
          estado_id: '17',
          cidade: 'Demerval Lobão'
        },
        {
          estado_id: '17',
          cidade: 'Dirceu Arcoverde'
        },
        {
          estado_id: '17',
          cidade: 'Dom Expedito Lopes'
        },
        {
          estado_id: '17',
          cidade: 'Dom Inocêncio'
        },
        {
          estado_id: '17',
          cidade: 'Domingos Mourão'
        },
        {
          estado_id: '17',
          cidade: 'Elesbão Veloso'
        },
        {
          estado_id: '17',
          cidade: 'Eliseu Martins'
        },
        {
          estado_id: '17',
          cidade: 'Esperantina'
        },
        {
          estado_id: '17',
          cidade: 'Fartura do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Flores do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Floresta do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Floriano'
        },
        {
          estado_id: '17',
          cidade: 'Francinópolis'
        },
        {
          estado_id: '17',
          cidade: 'Francisco Ayres'
        },
        {
          estado_id: '17',
          cidade: 'Francisco Macedo'
        },
        {
          estado_id: '17',
          cidade: 'Francisco Santos'
        },
        {
          estado_id: '17',
          cidade: 'Fronteiras'
        },
        {
          estado_id: '17',
          cidade: 'Geminiano'
        },
        {
          estado_id: '17',
          cidade: 'Gilbués'
        },
        {
          estado_id: '17',
          cidade: 'Guadalupe'
        },
        {
          estado_id: '17',
          cidade: 'Guaribas'
        },
        {
          estado_id: '17',
          cidade: 'Hugo Napoleão'
        },
        {
          estado_id: '17',
          cidade: 'Ilha Grande'
        },
        {
          estado_id: '17',
          cidade: 'Inhuma'
        },
        {
          estado_id: '17',
          cidade: 'Ipiranga do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Isaías Coelho'
        },
        {
          estado_id: '17',
          cidade: 'Itainópolis'
        },
        {
          estado_id: '17',
          cidade: 'Itaueira'
        },
        {
          estado_id: '17',
          cidade: 'Jacobina do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Jaicós'
        },
        {
          estado_id: '17',
          cidade: 'Jardim do Mulato'
        },
        {
          estado_id: '17',
          cidade: 'Jatobá do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Jerumenha'
        },
        {
          estado_id: '17',
          cidade: 'João Costa'
        },
        {
          estado_id: '17',
          cidade: 'Joaquim Pires'
        },
        {
          estado_id: '17',
          cidade: 'Joca Marques'
        },
        {
          estado_id: '17',
          cidade: 'José de Freitas'
        },
        {
          estado_id: '17',
          cidade: 'Juazeiro do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Júlio Borges'
        },
        {
          estado_id: '17',
          cidade: 'Jurema'
        },
        {
          estado_id: '17',
          cidade: 'Lagoa Alegre'
        },
        {
          estado_id: '17',
          cidade: 'Lagoa de São Francisco'
        },
        {
          estado_id: '17',
          cidade: 'Lagoa do Barro do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Lagoa do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Lagoa do Sítio'
        },
        {
          estado_id: '17',
          cidade: 'Lagoinha do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Landri Sales'
        },
        {
          estado_id: '17',
          cidade: 'Luís Correia'
        },
        {
          estado_id: '17',
          cidade: 'Luzilândia'
        },
        {
          estado_id: '17',
          cidade: 'Madeiro'
        },
        {
          estado_id: '17',
          cidade: 'Manoel Emídio'
        },
        {
          estado_id: '17',
          cidade: 'Marcolândia'
        },
        {
          estado_id: '17',
          cidade: 'Marcos Parente'
        },
        {
          estado_id: '17',
          cidade: 'Massapê do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Matias Olímpio'
        },
        {
          estado_id: '17',
          cidade: 'Miguel Alves'
        },
        {
          estado_id: '17',
          cidade: 'Miguel Leão'
        },
        {
          estado_id: '17',
          cidade: 'Milton Brandão'
        },
        {
          estado_id: '17',
          cidade: 'Monsenhor Gil'
        },
        {
          estado_id: '17',
          cidade: 'Monsenhor Hipólito'
        },
        {
          estado_id: '17',
          cidade: 'Monte Alegre do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Morro Cabeça no Tempo'
        },
        {
          estado_id: '17',
          cidade: 'Morro do Chapéu do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Murici dos Portelas'
        },
        {
          estado_id: '17',
          cidade: 'Nazaré do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Nossa Senhora de Nazaré'
        },
        {
          estado_id: '17',
          cidade: 'Nossa Senhora dos Remédios'
        },
        {
          estado_id: '17',
          cidade: 'Nova Santa Rita'
        },
        {
          estado_id: '17',
          cidade: 'Novo Oriente do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Novo Santo Antônio'
        },
        {
          estado_id: '17',
          cidade: 'Oeiras'
        },
        {
          estado_id: '17',
          cidade: 'Olho d Água do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Padre Marcos'
        },
        {
          estado_id: '17',
          cidade: 'Paes Landim'
        },
        {
          estado_id: '17',
          cidade: 'Pajeú do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Palmeira do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Palmeirais'
        },
        {
          estado_id: '17',
          cidade: 'Paquetá'
        },
        {
          estado_id: '17',
          cidade: 'Parnaguá'
        },
        {
          estado_id: '17',
          cidade: 'Parnaíba'
        },
        {
          estado_id: '17',
          cidade: 'Passagem Franca do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Patos do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Pau d Arco do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Paulistana'
        },
        {
          estado_id: '17',
          cidade: 'Pavussu'
        },
        {
          estado_id: '17',
          cidade: 'Pedro II'
        },
        {
          estado_id: '17',
          cidade: 'Pedro Laurentino'
        },
        {
          estado_id: '17',
          cidade: 'Picos'
        },
        {
          estado_id: '17',
          cidade: 'Pimenteiras'
        },
        {
          estado_id: '17',
          cidade: 'Pio IX'
        },
        {
          estado_id: '17',
          cidade: 'Piracuruca'
        },
        {
          estado_id: '17',
          cidade: 'Piripiri'
        },
        {
          estado_id: '17',
          cidade: 'Porto'
        },
        {
          estado_id: '17',
          cidade: 'Porto Alegre do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Prata do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Queimada Nova'
        },
        {
          estado_id: '17',
          cidade: 'Redenção do Gurguéia'
        },
        {
          estado_id: '17',
          cidade: 'Regeneração'
        },
        {
          estado_id: '17',
          cidade: 'Riacho Frio'
        },
        {
          estado_id: '17',
          cidade: 'Ribeira do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Ribeiro Gonçalves'
        },
        {
          estado_id: '17',
          cidade: 'Rio Grande do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Santa Cruz do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Santa Cruz dos Milagres'
        },
        {
          estado_id: '17',
          cidade: 'Santa Filomena'
        },
        {
          estado_id: '17',
          cidade: 'Santa Luz'
        },
        {
          estado_id: '17',
          cidade: 'Santa Rosa do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Santana do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Santo Antônio de Lisboa'
        },
        {
          estado_id: '17',
          cidade: 'Santo Antônio dos Milagres'
        },
        {
          estado_id: '17',
          cidade: 'Santo Inácio do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'São Braz do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'São Félix do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'São Francisco de Assis do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'São Francisco do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'São Gonçalo do Gurguéia'
        },
        {
          estado_id: '17',
          cidade: 'São Gonçalo do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'São João da Canabrava'
        },
        {
          estado_id: '17',
          cidade: 'São João da Fronteira'
        },
        {
          estado_id: '17',
          cidade: 'São João da Serra'
        },
        {
          estado_id: '17',
          cidade: 'São João da Varjota'
        },
        {
          estado_id: '17',
          cidade: 'São João do Arraial'
        },
        {
          estado_id: '17',
          cidade: 'São João do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'São José do Divino'
        },
        {
          estado_id: '17',
          cidade: 'São José do Peixe'
        },
        {
          estado_id: '17',
          cidade: 'São José do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'São Julião'
        },
        {
          estado_id: '17',
          cidade: 'São Lourenço do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'São Luis do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'São Miguel da Baixa Grande'
        },
        {
          estado_id: '17',
          cidade: 'São Miguel do Fidalgo'
        },
        {
          estado_id: '17',
          cidade: 'São Miguel do Tapuio'
        },
        {
          estado_id: '17',
          cidade: 'São Pedro do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'São Raimundo Nonato'
        },
        {
          estado_id: '17',
          cidade: 'Sebastião Barros'
        },
        {
          estado_id: '17',
          cidade: 'Sebastião Leal'
        },
        {
          estado_id: '17',
          cidade: 'Sigefredo Pacheco'
        },
        {
          estado_id: '17',
          cidade: 'Simões'
        },
        {
          estado_id: '17',
          cidade: 'Simplício Mendes'
        },
        {
          estado_id: '17',
          cidade: 'Socorro do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Sussuapara'
        },
        {
          estado_id: '17',
          cidade: 'Tamboril do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Tanque do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'União'
        },
        {
          estado_id: '17',
          cidade: 'Uruçuí'
        },
        {
          estado_id: '17',
          cidade: 'Valença do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Várzea Branca'
        },
        {
          estado_id: '17',
          cidade: 'Várzea Grande'
        },
        {
          estado_id: '17',
          cidade: 'Vera Mendes'
        },
        {
          estado_id: '17',
          cidade: 'Vila Nova do Piauí'
        },
        {
          estado_id: '17',
          cidade: 'Wall Ferraz'
        },
        {
          estado_id: '17',
          cidade: 'Teresina'
        },
        {
          estado_id: '18',
          cidade: 'Piraquara'
        },
        {
          estado_id: '18',
          cidade: 'Teixeira Soares'
        },
        {
          estado_id: '18',
          cidade: 'Califórnia'
        },
        {
          estado_id: '18',
          cidade: 'Rolândia'
        },
        {
          estado_id: '18',
          cidade: 'Sertaneja'
        },
        {
          estado_id: '18',
          cidade: 'Nova Santa Bárbara'
        },
        {
          estado_id: '18',
          cidade: 'Nova América da Colina'
        },
        {
          estado_id: '18',
          cidade: 'Balsa Nova'
        },
        {
          estado_id: '18',
          cidade: 'Vera Cruz do Oeste'
        },
        {
          estado_id: '18',
          cidade: 'Toledo'
        },
        {
          estado_id: '18',
          cidade: 'Florestópolis'
        },
        {
          estado_id: '18',
          cidade: 'Abatiá'
        },
        {
          estado_id: '18',
          cidade: 'Adrianópolis'
        },
        {
          estado_id: '18',
          cidade: 'Agudos do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Almirante Tamandaré'
        },
        {
          estado_id: '18',
          cidade: 'Altamira do Paraná'
        },
        {
          estado_id: '18',
          cidade: 'Alto Paraíso'
        },
        {
          estado_id: '18',
          cidade: 'Alto Paraná'
        },
        {
          estado_id: '18',
          cidade: 'Alto Piquiri'
        },
        {
          estado_id: '18',
          cidade: 'Altônia'
        },
        {
          estado_id: '18',
          cidade: 'Alvorada do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Amaporã'
        },
        {
          estado_id: '18',
          cidade: 'Ampére'
        },
        {
          estado_id: '18',
          cidade: 'Anahy'
        },
        {
          estado_id: '18',
          cidade: 'Andirá'
        },
        {
          estado_id: '18',
          cidade: 'Ângulo'
        },
        {
          estado_id: '18',
          cidade: 'Antonina'
        },
        {
          estado_id: '18',
          cidade: 'Antônio Olinto'
        },
        {
          estado_id: '18',
          cidade: 'Apucarana'
        },
        {
          estado_id: '18',
          cidade: 'Arapoti'
        },
        {
          estado_id: '18',
          cidade: 'Arapuã'
        },
        {
          estado_id: '18',
          cidade: 'Araruna'
        },
        {
          estado_id: '18',
          cidade: 'Ariranha do Ivaí'
        },
        {
          estado_id: '18',
          cidade: 'Assaí'
        },
        {
          estado_id: '18',
          cidade: 'Assis Chateaubriand'
        }, {
          estado_id: '18',
          cidade: 'Astorga'
        },
        {
          estado_id: '18',
          cidade: 'Atalaia'
        },
        {
          estado_id: '18',
          cidade: 'Bandeirantes'
        },
        {
          estado_id: '18',
          cidade: 'Barbosa Ferraz'
        },
        {
          estado_id: '18',
          cidade: 'Barra do Jacaré'
        },
        {
          estado_id: '18',
          cidade: 'Barracão'
        },
        {
          estado_id: '18',
          cidade: 'Bela Vista da Caroba'
        },
        {
          estado_id: '18',
          cidade: 'Bela Vista do Paraíso'
        },
        {
          estado_id: '18',
          cidade: 'Bituruna'
        },
        {
          estado_id: '18',
          cidade: 'Boa Esperança'
        },
        {
          estado_id: '18',
          cidade: 'Boa Esperança do Iguaçu'
        },
        {
          estado_id: '18',
          cidade: 'Boa Ventura de São Roque'
        },
        {
          estado_id: '18',
          cidade: 'Boa Vista da Aparecida'
        },
        {
          estado_id: '18',
          cidade: 'Bocaiúva do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Bom Jesus do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Bom Sucesso'
        },
        {
          estado_id: '18',
          cidade: 'Bom Sucesso do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Borrazópolis'
        },
        {
          estado_id: '18',
          cidade: 'Braganey'
        },
        {
          estado_id: '18',
          cidade: 'Brasilândia do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Cafeara'
        },
        {
          estado_id: '18',
          cidade: 'Cafelândia'
        },
        {
          estado_id: '18',
          cidade: 'Cafezal do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Cambará'
        },
        {
          estado_id: '18',
          cidade: 'Cambira'
        },
        {
          estado_id: '18',
          cidade: 'Campina da Lagoa'
        },
        {
          estado_id: '18',
          cidade: 'Campina do Simão'
        },
        {
          estado_id: '18',
          cidade: 'Campina Grande do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Campo Bonito'
        },
        {
          estado_id: '18',
          cidade: 'Campo do Tenente'
        },
        {
          estado_id: '18',
          cidade: 'Campo Magro'
        },
        {
          estado_id: '18',
          cidade: 'Campo Mourão'
        },
        {
          estado_id: '18',
          cidade: 'Cândido de Abreu'
        },
        {
          estado_id: '18',
          cidade: 'Candói'
        },
        {
          estado_id: '18',
          cidade: 'Cantagalo'
        },
        {
          estado_id: '18',
          cidade: 'Capanema'
        },
        {
          estado_id: '18',
          cidade: 'Capitão Leônidas Marques'
        },
        {
          estado_id: '18',
          cidade: 'Carlópolis'
        },
        {
          estado_id: '18',
          cidade: 'Castro'
        },
        {
          estado_id: '18',
          cidade: 'Catanduvas'
        },
        {
          estado_id: '18',
          cidade: 'Centenário do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Cerro Azul'
        },
        {
          estado_id: '18',
          cidade: 'Céu Azul'
        },
        {
          estado_id: '18',
          cidade: 'Chopinzinho'
        },
        {
          estado_id: '18',
          cidade: 'Cianorte'
        },
        {
          estado_id: '18',
          cidade: 'Cidade Gaúcha'
        },
        {
          estado_id: '18',
          cidade: 'Clevelândia'
        },
        {
          estado_id: '18',
          cidade: 'Colombo'
        },
        {
          estado_id: '18',
          cidade: 'Colorado'
        },
        {
          estado_id: '18',
          cidade: 'Congonhinhas'
        },
        {
          estado_id: '18',
          cidade: 'Conselheiro Mairinck'
        },
        {
          estado_id: '18',
          cidade: 'Contenda'
        },
        {
          estado_id: '18',
          cidade: 'Corbélia'
        },
        {
          estado_id: '18',
          cidade: 'Coronel Domingos Soares'
        },
        {
          estado_id: '18',
          cidade: 'Coronel Vivida'
        },
        {
          estado_id: '18',
          cidade: 'Corumbataí do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Cruz Machado'
        },
        {
          estado_id: '18',
          cidade: 'Cruzeiro do Iguaçu'
        },
        {
          estado_id: '18',
          cidade: 'Cruzeiro do Oeste'
        },
        {
          estado_id: '18',
          cidade: 'Cruzeiro do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Cruzmaltina'
        },
        {
          estado_id: '18',
          cidade: 'Curiúva'
        },
        {
          estado_id: '18',
          cidade: 'Diamante do Norte'
        },
        {
          estado_id: '18',
          cidade: 'Diamante do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Diamante d Oeste'
        },
        {
          estado_id: '18',
          cidade: 'Dois Vizinhos'
        },
        {
          estado_id: '18',
          cidade: 'Douradina'
        },
        {
          estado_id: '18',
          cidade: 'Doutor Camargo'
        },
        {
          estado_id: '18',
          cidade: 'Doutor Ulysses'
        },
        {
          estado_id: '18',
          cidade: 'Enéas Marques'
        },
        {
          estado_id: '18',
          cidade: 'Engenheiro Beltrão'
        },
        {
          estado_id: '18',
          cidade: 'Entre Rios do Oeste'
        },
        {
          estado_id: '18',
          cidade: 'Esperança Nova'
        },
        {
          estado_id: '18',
          cidade: 'Espigão Alto do Iguaçu'
        },
        {
          estado_id: '18',
          cidade: 'Farol'
        },
        {
          estado_id: '18',
          cidade: 'Faxinal'
        },
        {
          estado_id: '18',
          cidade: 'Fênix'
        },
        {
          estado_id: '18',
          cidade: 'Fernandes Pinheiro'
        },
        {
          estado_id: '18',
          cidade: 'Figueira'
        },
        {
          estado_id: '18',
          cidade: 'Flor da Serra do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Floraí'
        },
        {
          estado_id: '18',
          cidade: 'Floresta'
        },
        {
          estado_id: '18',
          cidade: 'Flórida'
        },
        {
          estado_id: '18',
          cidade: 'Formosa do Oeste'
        },
        {
          estado_id: '18',
          cidade: 'Foz do Jordão'
        },
        {
          estado_id: '18',
          cidade: 'Francisco Alves'
        },
        {
          estado_id: '18',
          cidade: 'Francisco Beltrão'
        },
        {
          estado_id: '18',
          cidade: 'General Carneiro'
        },
        {
          estado_id: '18',
          cidade: 'Godoy Moreira'
        },
        {
          estado_id: '18',
          cidade: 'Goioerê'
        },
        {
          estado_id: '18',
          cidade: 'Goioxim'
        },
        {
          estado_id: '18',
          cidade: 'Grandes Rios'
        },
        {
          estado_id: '18',
          cidade: 'Guaíra'
        },
        {
          estado_id: '18',
          cidade: 'Guairaçá'
        },
        {
          estado_id: '18',
          cidade: 'Guamiranga'
        },
        {
          estado_id: '18',
          cidade: 'Guapirama'
        },
        {
          estado_id: '18',
          cidade: 'Guaporema'
        },
        {
          estado_id: '18',
          cidade: 'Guaraci'
        },
        {
          estado_id: '18',
          cidade: 'Guaraniaçu'
        },
        {
          estado_id: '18',
          cidade: 'Guarapuava'
        },
        {
          estado_id: '18',
          cidade: 'Guaraqueçaba'
        },
        {
          estado_id: '18',
          cidade: 'Guaratuba'
        },
        {
          estado_id: '18',
          cidade: 'Honório Serpa'
        },
        {
          estado_id: '18',
          cidade: 'Ibaiti'
        },
        {
          estado_id: '18',
          cidade: 'Ibema'
        },
        {
          estado_id: '18',
          cidade: 'Icaraíma'
        },
        {
          estado_id: '18',
          cidade: 'Iguaraçu'
        },
        {
          estado_id: '18',
          cidade: 'Iguatu'
        },
        {
          estado_id: '18',
          cidade: 'Imbaú'
        },
        {
          estado_id: '18',
          cidade: 'Imbituva'
        },
        {
          estado_id: '18',
          cidade: 'Inácio Martins'
        },
        {
          estado_id: '18',
          cidade: 'Inajá'
        },
        {
          estado_id: '18',
          cidade: 'Indianópolis'
        },
        {
          estado_id: '18',
          cidade: 'Ipiranga'
        },
        {
          estado_id: '18',
          cidade: 'Iporã'
        },
        {
          estado_id: '18',
          cidade: 'Iracema do Oeste'
        },
        {
          estado_id: '18',
          cidade: 'Irati'
        },
        {
          estado_id: '18',
          cidade: 'Iretama'
        },
        {
          estado_id: '18',
          cidade: 'Itaguajé'
        },
        {
          estado_id: '18',
          cidade: 'Itaipulândia'
        },
        {
          estado_id: '18',
          cidade: 'Itambaracá'
        },
        {
          estado_id: '18',
          cidade: 'Itambé'
        },
        {
          estado_id: '18',
          cidade: 'Itapejara d Oeste'
        },
        {
          estado_id: '18',
          cidade: 'Itaperuçu'
        },
        {
          estado_id: '18',
          cidade: 'Itaúna do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Ivaí'
        },
        {
          estado_id: '18',
          cidade: 'Ivaiporã'
        },
        {
          estado_id: '18',
          cidade: 'Ivaté'
        },
        {
          estado_id: '18',
          cidade: 'Ivatuba'
        },
        {
          estado_id: '18',
          cidade: 'Jaboti'
        },
        {
          estado_id: '18',
          cidade: 'Jacarezinho'
        },
        {
          estado_id: '18',
          cidade: 'Jaguapitã'
        },
        {
          estado_id: '18',
          cidade: 'Jaguariaíva'
        },
        {
          estado_id: '18',
          cidade: 'Jandaia do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Janiópolis'
        },
        {
          estado_id: '18',
          cidade: 'Japira'
        },
        {
          estado_id: '18',
          cidade: 'Japurá'
        },
        {
          estado_id: '18',
          cidade: 'Jardim Alegre'
        },
        {
          estado_id: '18',
          cidade: 'Jardim Olinda'
        },
        {
          estado_id: '18',
          cidade: 'Jataizinho'
        },
        {
          estado_id: '18',
          cidade: 'Jesuítas'
        },
        {
          estado_id: '18',
          cidade: 'Joaquim Távora'
        },
        {
          estado_id: '18',
          cidade: 'Jundiaí do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Juranda'
        },
        {
          estado_id: '18',
          cidade: 'Jussara'
        },
        {
          estado_id: '18',
          cidade: 'Kaloré'
        },
        {
          estado_id: '18',
          cidade: 'Lapa'
        },
        {
          estado_id: '18',
          cidade: 'Laranjal'
        },
        {
          estado_id: '18',
          cidade: 'Laranjeiras do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Lidianópolis'
        },
        {
          estado_id: '18',
          cidade: 'Lindoeste'
        },
        {
          estado_id: '18',
          cidade: 'Loanda'
        },
        {
          estado_id: '18',
          cidade: 'Lobato'
        },
        {
          estado_id: '18',
          cidade: 'Luiziana'
        },
        {
          estado_id: '18',
          cidade: 'Lunardelli'
        },
        {
          estado_id: '18',
          cidade: 'Lupionópolis'
        },
        {
          estado_id: '18',
          cidade: 'Mallet'
        },
        {
          estado_id: '18',
          cidade: 'Mamborê'
        },
        {
          estado_id: '18',
          cidade: 'Mandaguaçu'
        },
        {
          estado_id: '18',
          cidade: 'Mandaguari'
        },
        {
          estado_id: '18',
          cidade: 'Manfrinópolis'
        },
        {
          estado_id: '18',
          cidade: 'Mangueirinha'
        },
        {
          estado_id: '18',
          cidade: 'Manoel Ribas'
        },
        {
          estado_id: '18',
          cidade: 'Marechal Cândido Rondon'
        },
        {
          estado_id: '18',
          cidade: 'Maria Helena'
        },
        {
          estado_id: '18',
          cidade: 'Marialva'
        },
        {
          estado_id: '18',
          cidade: 'Marilândia do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Marilena'
        },
        {
          estado_id: '18',
          cidade: 'Mariluz'
        },
        {
          estado_id: '18',
          cidade: 'Maringá'
        },
        {
          estado_id: '18',
          cidade: 'Mariópolis'
        },
        {
          estado_id: '18',
          cidade: 'Maripá'
        },
        {
          estado_id: '18',
          cidade: 'Marmeleiro'
        },
        {
          estado_id: '18',
          cidade: 'Marquinho'
        },
        {
          estado_id: '18',
          cidade: 'Marumbi'
        },
        {
          estado_id: '18',
          cidade: 'Matelândia'
        },
        {
          estado_id: '18',
          cidade: 'Matinhos'
        },
        {
          estado_id: '18',
          cidade: 'Mato Rico'
        },
        {
          estado_id: '18',
          cidade: 'Mauá da Serra'
        },
        {
          estado_id: '18',
          cidade: 'Medianeira'
        },
        {
          estado_id: '18',
          cidade: 'Mercedes'
        },
        {
          estado_id: '18',
          cidade: 'Mirador'
        },
        {
          estado_id: '18',
          cidade: 'Miraselva'
        },
        {
          estado_id: '18',
          cidade: 'Missal'
        },
        {
          estado_id: '18',
          cidade: 'Moreira Sales'
        },
        {
          estado_id: '18',
          cidade: 'Morretes'
        },
        {
          estado_id: '18',
          cidade: 'Munhoz de Melo'
        },
        {
          estado_id: '18',
          cidade: 'Nossa Senhora das Graças'
        },
        {
          estado_id: '18',
          cidade: 'Nova Aliança do Ivaí'
        },
        {
          estado_id: '18',
          cidade: 'Nova Aurora'
        },
        {
          estado_id: '18',
          cidade: 'Nova Cantu'
        },
        {
          estado_id: '18',
          cidade: 'Nova Esperança'
        },
        {
          estado_id: '18',
          cidade: 'Nova Esperança do Sudoeste'
        },
        {
          estado_id: '18',
          cidade: 'Nova Fátima'
        },
        {
          estado_id: '18',
          cidade: 'Nova Laranjeiras'
        },
        {
          estado_id: '18',
          cidade: 'Nova Londrina'
        },
        {
          estado_id: '18',
          cidade: 'Nova Olímpia'
        },
        {
          estado_id: '18',
          cidade: 'Nova Prata do Iguaçu'
        },
        {
          estado_id: '18',
          cidade: 'Nova Santa Rosa'
        },
        {
          estado_id: '18',
          cidade: 'Nova Tebas'
        },
        {
          estado_id: '18',
          cidade: 'Novo Itacolomi'
        },
        {
          estado_id: '18',
          cidade: 'Ortigueira'
        },
        {
          estado_id: '18',
          cidade: 'Ourizona'
        },
        {
          estado_id: '18',
          cidade: 'Ouro Verde do Oeste'
        },
        {
          estado_id: '18',
          cidade: 'Paiçandu'
        },
        {
          estado_id: '18',
          cidade: 'Palmas'
        },
        {
          estado_id: '18',
          cidade: 'Palmeira'
        },
        {
          estado_id: '18',
          cidade: 'Palmital'
        },
        {
          estado_id: '18',
          cidade: 'Palotina'
        },
        {
          estado_id: '18',
          cidade: 'Paraíso do Norte'
        },
        {
          estado_id: '18',
          cidade: 'Paranacity'
        },
        {
          estado_id: '18',
          cidade: 'Paranapoema'
        },
        {
          estado_id: '18',
          cidade: 'Paranavaí'
        },
        {
          estado_id: '18',
          cidade: 'Pato Bragado'
        },
        {
          estado_id: '18',
          cidade: 'Pato Branco'
        },
        {
          estado_id: '18',
          cidade: 'Paula Freitas'
        },
        {
          estado_id: '18',
          cidade: 'Paulo Frontin'
        },
        {
          estado_id: '18',
          cidade: 'Peabiru'
        },
        {
          estado_id: '18',
          cidade: 'Perobal'
        },
        {
          estado_id: '18',
          cidade: 'Pérola'
        },
        {
          estado_id: '18',
          cidade: 'Pérola d Oeste'
        },
        {
          estado_id: '18',
          cidade: 'Pinhal de São Bento'
        },
        {
          estado_id: '18',
          cidade: 'Pinhalão'
        },
        {
          estado_id: '18',
          cidade: 'Pinhão'
        },
        {
          estado_id: '18',
          cidade: 'Piraí do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Pitanga'
        },
        {
          estado_id: '18',
          cidade: 'Pitangueiras'
        },
        {
          estado_id: '18',
          cidade: 'Planaltina do Paraná'
        },
        {
          estado_id: '18',
          cidade: 'Planalto'
        },
        {
          estado_id: '18',
          cidade: 'Porecatu'
        },
        {
          estado_id: '18',
          cidade: 'Porto Amazonas'
        },
        {
          estado_id: '18',
          cidade: 'Porto Barreiro'
        },
        {
          estado_id: '18',
          cidade: 'Porto Rico'
        },
        {
          estado_id: '18',
          cidade: 'Porto Vitória'
        },
        {
          estado_id: '18',
          cidade: 'Pranchita'
        },
        {
          estado_id: '18',
          cidade: 'Presidente Castelo Branco'
        },
        {
          estado_id: '18',
          cidade: 'Primeiro de Maio'
        },
        {
          estado_id: '18',
          cidade: 'Prudentópolis'
        },
        {
          estado_id: '18',
          cidade: 'Quarto Centenário'
        },
        {
          estado_id: '18',
          cidade: 'Quatiguá'
        },
        {
          estado_id: '18',
          cidade: 'Quatro Pontes'
        },
        {
          estado_id: '18',
          cidade: 'Quedas do Iguaçu'
        },
        {
          estado_id: '18',
          cidade: 'Querência do Norte'
        },
        {
          estado_id: '18',
          cidade: 'Quinta do Sol'
        },
        {
          estado_id: '18',
          cidade: 'Quitandinha'
        },
        {
          estado_id: '18',
          cidade: 'Ramilândia'
        },
        {
          estado_id: '18',
          cidade: 'Rancho Alegre d Oeste'
        },
        {
          estado_id: '18',
          cidade: 'Realeza'
        },
        {
          estado_id: '18',
          cidade: 'Rebouças'
        },
        {
          estado_id: '18',
          cidade: 'Renascença'
        },
        {
          estado_id: '18',
          cidade: 'Reserva'
        },
        {
          estado_id: '18',
          cidade: 'Reserva do Iguaçu'
        },
        {
          estado_id: '18',
          cidade: 'Ribeirão Claro'
        },
        {
          estado_id: '18',
          cidade: 'Ribeirão do Pinhal'
        },
        {
          estado_id: '18',
          cidade: 'Rio Azul'
        },
        {
          estado_id: '18',
          cidade: 'Rio Bom'
        },
        {
          estado_id: '18',
          cidade: 'Rio Bonito do Iguaçu'
        },
        {
          estado_id: '18',
          cidade: 'Rio Branco do Ivaí'
        },
        {
          estado_id: '18',
          cidade: 'Rio Branco do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Rio Negro'
        },
        {
          estado_id: '18',
          cidade: 'Roncador'
        },
        {
          estado_id: '18',
          cidade: 'Rondon'
        },
        {
          estado_id: '18',
          cidade: 'Rosário do Ivaí'
        },
        {
          estado_id: '18',
          cidade: 'Sabáudia'
        },
        {
          estado_id: '18',
          cidade: 'Salgado Filho'
        },
        {
          estado_id: '18',
          cidade: 'Salto do Itararé'
        },
        {
          estado_id: '18',
          cidade: 'Salto do Lontra'
        },
        {
          estado_id: '18',
          cidade: 'Santa Amélia'
        },
        {
          estado_id: '18',
          cidade: 'Santa Cruz de Monte Castelo'
        },
        {
          estado_id: '18',
          cidade: 'Santa Fé'
        },
        {
          estado_id: '18',
          cidade: 'Santa Helena'
        },
        {
          estado_id: '18',
          cidade: 'Santa Inês'
        },
        {
          estado_id: '18',
          cidade: 'Santa Isabel do Ivaí'
        },
        {
          estado_id: '18',
          cidade: 'Santa Izabel do Oeste'
        },
        {
          estado_id: '18',
          cidade: 'Santa Lúcia'
        },
        {
          estado_id: '18',
          cidade: 'Santa Maria do Oeste'
        },
        {
          estado_id: '18',
          cidade: 'Santa Mariana'
        },
        {
          estado_id: '18',
          cidade: 'Santa Mônica'
        },
        {
          estado_id: '18',
          cidade: 'Santa Terezinha de Itaipu'
        },
        {
          estado_id: '18',
          cidade: 'Santana do Itararé'
        },
        {
          estado_id: '18',
          cidade: 'Santo Antônio da Platina'
        },
        {
          estado_id: '18',
          cidade: 'Santo Antônio do Caiuá'
        },
        {
          estado_id: '18',
          cidade: 'Santo Antônio do Paraíso'
        },
        {
          estado_id: '18',
          cidade: 'Santo Antônio do Sudoeste'
        },
        {
          estado_id: '18',
          cidade: 'Santo Inácio'
        },
        {
          estado_id: '18',
          cidade: 'São Carlos do Ivaí'
        },
        {
          estado_id: '18',
          cidade: 'São Jerônimo da Serra'
        },
        {
          estado_id: '18',
          cidade: 'São João'
        },
        {
          estado_id: '18',
          cidade: 'São João do Caiuá'
        },
        {
          estado_id: '18',
          cidade: 'São João do Ivaí'
        },
        {
          estado_id: '18',
          cidade: 'São João do Triunfo'
        },
        {
          estado_id: '18',
          cidade: 'São Jorge do Ivaí'
        },
        {
          estado_id: '18',
          cidade: 'São Jorge do Patrocínio'
        },
        {
          estado_id: '18',
          cidade: 'São Jorge d Oeste'
        },
        {
          estado_id: '18',
          cidade: 'São José da Boa Vista'
        },
        {
          estado_id: '18',
          cidade: 'São José das Palmeiras'
        },
        {
          estado_id: '18',
          cidade: 'São Manoel do Paraná'
        },
        {
          estado_id: '18',
          cidade: 'São Mateus do Sul'
        },
        {
          estado_id: '18',
          cidade: 'São Miguel do Iguaçu'
        },
        {
          estado_id: '18',
          cidade: 'São Pedro do Iguaçu'
        },
        {
          estado_id: '18',
          cidade: 'São Pedro do Ivaí'
        },
        {
          estado_id: '18',
          cidade: 'São Pedro do Paraná'
        },
        {
          estado_id: '18',
          cidade: 'São Tomé'
        },
        {
          estado_id: '18',
          cidade: 'Sapopema'
        },
        {
          estado_id: '18',
          cidade: 'Sarandi'
        },
        {
          estado_id: '18',
          cidade: 'Saudade do Iguaçu'
        },
        {
          estado_id: '18',
          cidade: 'Sengés'
        },
        {
          estado_id: '18',
          cidade: 'Serranópolis do Iguaçu'
        },
        {
          estado_id: '18',
          cidade: 'Sertanópolis'
        },
        {
          estado_id: '18',
          cidade: 'Siqueira Campos'
        },
        {
          estado_id: '18',
          cidade: 'Sulina'
        },
        {
          estado_id: '18',
          cidade: 'Tamarana'
        },
        {
          estado_id: '18',
          cidade: 'Tamboara'
        },
        {
          estado_id: '18',
          cidade: 'Tapejara'
        },
        {
          estado_id: '18',
          cidade: 'Tapira'
        },
        {
          estado_id: '18',
          cidade: 'Telêmaco Borba'
        },
        {
          estado_id: '18',
          cidade: 'Terra Boa'
        },
        {
          estado_id: '18',
          cidade: 'Terra Rica'
        },
        {
          estado_id: '18',
          cidade: 'Terra Roxa'
        },
        {
          estado_id: '18',
          cidade: 'Tibagi'
        },
        {
          estado_id: '18',
          cidade: 'Tijucas do Sul'
        },
        {
          estado_id: '18',
          cidade: 'Tomazina'
        },
        {
          estado_id: '18',
          cidade: 'Três Barras do Paraná'
        },
        {
          estado_id: '18',
          cidade: 'Tunas do Paraná'
        },
        {
          estado_id: '18',
          cidade: 'Tuneiras do Oeste'
        },
        {
          estado_id: '18',
          cidade: 'Tupãssi'
        },
        {
          estado_id: '18',
          cidade: 'Turvo'
        },
        {
          estado_id: '18',
          cidade: 'Ubiratã'
        },
        {
          estado_id: '18',
          cidade: 'Umuarama'
        },
        {
          estado_id: '18',
          cidade: 'União da Vitória'
        },
        {
          estado_id: '18',
          cidade: 'Uniflor'
        },
        {
          estado_id: '18',
          cidade: 'Uraí'
        },
        {
          estado_id: '18',
          cidade: 'Ventania'
        },
        {
          estado_id: '18',
          cidade: 'Verê'
        },
        {
          estado_id: '18',
          cidade: 'Virmond'
        }, {
          estado_id: '18',
          cidade: 'Vitorino'
        },
        {
          estado_id: '18',
          cidade: 'Wenceslau Braz'
        },
        {
          estado_id: '18',
          cidade: 'Xambrê'
        },
        {
          estado_id: '18',
          cidade: 'Cornélio Procópio'
        },
        {
          estado_id: '18',
          cidade: 'Mandirituba'
        },
        {
          estado_id: '18',
          cidade: 'Quatro Barras'
        },
        {
          estado_id: '18',
          cidade: 'Campo Largo'
        },
        {
          estado_id: '18',
          cidade: 'Foz do Iguaçu'
        },
        {
          estado_id: '18',
          cidade: 'Pontal do Paraná'
        },
        {
          estado_id: '18',
          cidade: 'Leópolis'
        },
        {
          estado_id: '18',
          cidade: 'Santa Tereza do Oeste'
        },
        {
          estado_id: '18',
          cidade: 'São Sebastião da Amoreira'
        },
        {
          estado_id: '18',
          cidade: 'Cambé'
        },
        {
          estado_id: '18',
          cidade: 'Santa Cecília do Pavão'
        },
        {
          estado_id: '18',
          cidade: 'Arapongas'
        },
        {
          estado_id: '18',
          cidade: 'Prado Ferreira'
        },
        {
          estado_id: '18',
          cidade: 'Carambeí'
        },
        {
          estado_id: '18',
          cidade: 'Rancho Alegre'
        },
        {
          estado_id: '18',
          cidade: 'Fazenda Rio Grande'
        },
        {
          estado_id: '18',
          cidade: 'Ponta Grossa'
        },
        {
          estado_id: '18',
          cidade: 'Ibiporã'
        },
        {
          estado_id: '18',
          cidade: 'Pinhais'
        },
        {
          estado_id: '18',
          cidade: 'São José dos Pinhais'
        },
        {
          estado_id: '18',
          cidade: 'Paranaguá'
        },
        {
          estado_id: '18',
          cidade: 'Araucária'
        },
        {
          estado_id: '18',
          cidade: 'Curitiba'
        },
        {
          estado_id: '18',
          cidade: 'Cascavel'
        },
        {
          estado_id: '18',
          cidade: 'Londrina'
        },
        {
          estado_id: '18',
          cidade: 'Piên'
        },
        {
          estado_id: '19',
          cidade: 'Angra dos Reis'
        },
        {
          estado_id: '19',
          cidade: 'Cachoeiras de Macacu'
        },
        {
          estado_id: '19',
          cidade: 'Arraial do Cabo'
        },
        {
          estado_id: '19',
          cidade: 'Paracambi'
        },
        {
          estado_id: '19',
          cidade: 'Aperibé'
        },
        {
          estado_id: '19',
          cidade: 'Areal'
        },
        {
          estado_id: '19',
          cidade: 'Barra do Piraí'
        },
        {
          estado_id: '19',
          cidade: 'Bom Jardim'
        },
        {
          estado_id: '19',
          cidade: 'Bom Jesus do Itabapoana'
        },
        {
          estado_id: '19',
          cidade: 'Cambuci'
        },
        {
          estado_id: '19',
          cidade: 'Cantagalo'
        },
        {
          estado_id: '19',
          cidade: 'Carapebus'
        },
        {
          estado_id: '19',
          cidade: 'Cardoso Moreira'
        },
        {
          estado_id: '19',
          cidade: 'Carmo'
        },
        {
          estado_id: '19',
          cidade: 'Comendador Levy Gasparian'
        },
        {
          estado_id: '19',
          cidade: 'Conceição de Macabu'
        },
        {
          estado_id: '19',
          cidade: 'Cordeiro'
        },
        {
          estado_id: '19',
          cidade: 'Duas Barras'
        },
        {
          estado_id: '19',
          cidade: 'Engenheiro Paulo de Frontin'
        },
        {
          estado_id: '19',
          cidade: 'Guapimirim'
        },
        {
          estado_id: '19',
          cidade: 'Italva'
        },
        {
          estado_id: '19',
          cidade: 'Itaocara'
        },
        {
          estado_id: '19',
          cidade: 'Itaperuna'
        },
        {
          estado_id: '19',
          cidade: 'Laje do Muriaé'
        },
        {
          estado_id: '19',
          cidade: 'Macuco'
        },
        {
          estado_id: '19',
          cidade: 'Mendes'
        },
        {
          estado_id: '19',
          cidade: 'Miguel Pereira'
        },
        {
          estado_id: '19',
          cidade: 'Miracema'
        },
        {
          estado_id: '19',
          cidade: 'Natividade'
        },
        {
          estado_id: '19',
          cidade: 'Paraíba do Sul'
        },
        {
          estado_id: '19',
          cidade: 'Paraty'
        },
        {
          estado_id: '19',
          cidade: 'Paty do Alferes'
        },
        {
          estado_id: '19',
          cidade: 'Porciúncula'
        },
        {
          estado_id: '19',
          cidade: 'Quissamã'
        },
        {
          estado_id: '19',
          cidade: 'Rio das Flores'
        },
        {
          estado_id: '19',
          cidade: 'Santa Maria Madalena'
        },
        {
          estado_id: '19',
          cidade: 'Santo Antônio de Pádua'
        },
        {
          estado_id: '19',
          cidade: 'São Fidélis'
        },
        {
          estado_id: '19',
          cidade: 'São Francisco de Itabapoana'
        },
        {
          estado_id: '19',
          cidade: 'São João da Barra'
        },
        {
          estado_id: '19',
          cidade: 'São José de Ubá'
        },
        {
          estado_id: '19',
          cidade: 'São José do Vale do Rio Preto'
        },
        {
          estado_id: '19',
          cidade: 'São Sebastião do Alto'
        },
        {
          estado_id: '19',
          cidade: 'Sapucaia'
        },
        {
          estado_id: '19',
          cidade: 'Sumidouro'
        },
        {
          estado_id: '19',
          cidade: 'Trajano de Moraes'
        },
        {
          estado_id: '19',
          cidade: 'Valença'
        },
        {
          estado_id: '19',
          cidade: 'Varre-Sai'
        },
        {
          estado_id: '19',
          cidade: 'Vassouras'
        },
        {
          estado_id: '19',
          cidade: 'Silva Jardim'
        },
        {
          estado_id: '19',
          cidade: 'Iguaba Grande'
        },
        {
          estado_id: '19',
          cidade: 'Nilópolis'
        },
        {
          estado_id: '19',
          cidade: 'Armação dos Búzios'
        },
        {
          estado_id: '19',
          cidade: 'São Pedro da Aldeia'
        },
        {
          estado_id: '19',
          cidade: 'Itatiaia'
        },
        {
          estado_id: '19',
          cidade: 'São Gonçalo'
        },
        {
          estado_id: '19',
          cidade: 'Nova Iguaçu'
        },
        {
          estado_id: '19',
          cidade: 'Resende'
        },
        {
          estado_id: '19',
          cidade: 'Seropédica'
        },
        {
          estado_id: '19',
          cidade: 'Saquarema'
        },
        {
          estado_id: '19',
          cidade: 'Piraí'
        },
        {
          estado_id: '19',
          cidade: 'São João de Meriti'
        },
        {
          estado_id: '19',
          cidade: 'Rio de Janeiro'
        },
        {
          estado_id: '19',
          cidade: 'Rio Claro'
        },
        {
          estado_id: '19',
          cidade: 'Niterói'
        },
        {
          estado_id: '19',
          cidade: 'Barra Mansa'
        },
        {
          estado_id: '19',
          cidade: 'Itaguaí'
        },
        {
          estado_id: '19',
          cidade: 'Japeri'
        },
        {
          estado_id: '19',
          cidade: 'Macaé'
        },
        {
          estado_id: '19',
          cidade: 'Belford Roxo'
        },
        {
          estado_id: '19',
          cidade: 'Volta Redonda'
        },
        {
          estado_id: '19',
          cidade: 'Mesquita'
        },
        {
          estado_id: '19',
          cidade: 'Itaboraí'
        },
        {
          estado_id: '19',
          cidade: 'Araruama'
        },
        {
          estado_id: '19',
          cidade: 'Duque de Caxias'
        },
        {
          estado_id: '19',
          cidade: 'Magé'
        },
        {
          estado_id: '19',
          cidade: 'Cabo Frio'
        },
        {
          estado_id: '19',
          cidade: 'Petrópolis'
        },
        {
          estado_id: '19',
          cidade: 'Porto Real'
        },
        {
          estado_id: '19',
          cidade: 'Mangaratiba'
        },
        {
          estado_id: '19',
          cidade: 'Campos dos Goytacazes'
        },
        {
          estado_id: '19',
          cidade: 'Rio Bonito'
        },
        {
          estado_id: '19',
          cidade: 'Nova Friburgo'
        },
        {
          estado_id: '19',
          cidade: 'Três Rios'
        },
        {
          estado_id: '19',
          cidade: 'Pinheiral'
        },
        {
          estado_id: '19',
          cidade: 'Queimados'
        },
        {
          estado_id: '19',
          cidade: 'Teresópolis'
        },
        {
          estado_id: '19',
          cidade: 'Maricá'
        },
        {
          estado_id: '19',
          cidade: 'Rio das Ostras'
        },
        {
          estado_id: '19',
          cidade: 'Casimiro de Abreu'
        },
        {
          estado_id: '19',
          cidade: 'Quatis'
        },
        {
          estado_id: '19',
          cidade: 'Tanguá'
        },
        {
          estado_id: '20',
          cidade: 'Extremoz'
        },
        {
          estado_id: '20',
          cidade: 'Parnamirim'
        },
        {
          estado_id: '20',
          cidade: 'Ceará-Mirim'
        },
        {
          estado_id: '20',
          cidade: 'Macaíba'
        },
        {
          estado_id: '20',
          cidade: 'Acari'
        },
        {
          estado_id: '20',
          cidade: 'Açu'
        },
        {
          estado_id: '20',
          cidade: 'Afonso Bezerra'
        },
        {
          estado_id: '20',
          cidade: 'Água Nova'
        },
        {
          estado_id: '20',
          cidade: 'Alexandria'
        },
        {
          estado_id: '20',
          cidade: 'Almino Afonso'
        },
        {
          estado_id: '20',
          cidade: 'Alto do Rodrigues'
        },
        {
          estado_id: '20',
          cidade: 'Angicos'
        },
        {
          estado_id: '20',
          cidade: 'Antônio Martins'
        },
        {
          estado_id: '20',
          cidade: 'Apodi'
        },
        {
          estado_id: '20',
          cidade: 'Areia Branca'
        },
        {
          estado_id: '20',
          cidade: 'Arês'
        },
        {
          estado_id: '20',
          cidade: 'Augusto Severo'
        },
        {
          estado_id: '20',
          cidade: 'Baía Formosa'
        },
        {
          estado_id: '20',
          cidade: 'Baraúna'
        },
        {
          estado_id: '20',
          cidade: 'Barcelona'
        },
        {
          estado_id: '20',
          cidade: 'Bento Fernandes'
        },
        {
          estado_id: '20',
          cidade: 'Bodó'
        },
        {
          estado_id: '20',
          cidade: 'Bom Jesus'
        },
        {
          estado_id: '20',
          cidade: 'Brejinho'
        },
        {
          estado_id: '20',
          cidade: 'Caiçara do Norte'
        },
        {
          estado_id: '20',
          cidade: 'Caiçara do Rio do Vento'
        },
        {
          estado_id: '20',
          cidade: 'Caicó'
        },
        {
          estado_id: '20',
          cidade: 'Campo Redondo'
        },
        {
          estado_id: '20',
          cidade: 'Canguaretama'
        },
        {
          estado_id: '20',
          cidade: 'Caraúbas'
        },
        {
          estado_id: '20',
          cidade: 'Carnaúba dos Dantas'
        },
        {
          estado_id: '20',
          cidade: 'Carnaubais'
        },
        {
          estado_id: '20',
          cidade: 'Cerro Corá'
        },
        {
          estado_id: '20',
          cidade: 'Coronel Ezequiel'
        },
        {
          estado_id: '20',
          cidade: 'Coronel João Pessoa'
        },
        {
          estado_id: '20',
          cidade: 'Cruzeta'
        },
        {
          estado_id: '20',
          cidade: 'Currais Novos'
        },
        {
          estado_id: '20',
          cidade: 'Doutor Severiano'
        },
        {
          estado_id: '20',
          cidade: 'Encanto'
        },
        {
          estado_id: '20',
          cidade: 'Equador'
        },
        {
          estado_id: '20',
          cidade: 'Espírito Santo'
        },
        {
          estado_id: '20',
          cidade: 'Felipe Guerra'
        },
        {
          estado_id: '20',
          cidade: 'Fernando Pedroza'
        },
        {
          estado_id: '20',
          cidade: 'Florânia'
        },
        {
          estado_id: '20',
          cidade: 'Francisco Dantas'
        },
        {
          estado_id: '20',
          cidade: 'Frutuoso Gomes'
        },
        {
          estado_id: '20',
          cidade: 'Galinhos'
        },
        {
          estado_id: '20',
          cidade: 'Goianinha'
        },
        {
          estado_id: '20',
          cidade: 'Governador Dix-Sept Rosado'
        },
        {
          estado_id: '20',
          cidade: 'Grossos'
        },
        {
          estado_id: '20',
          cidade: 'Guamaré'
        },
        {
          estado_id: '20',
          cidade: 'Ielmo Marinho'
        },
        {
          estado_id: '20',
          cidade: 'Ipanguaçu'
        },
        {
          estado_id: '20',
          cidade: 'Ipueira'
        },
        {
          estado_id: '20',
          cidade: 'Itajá'
        },
        {
          estado_id: '20',
          cidade: 'Itaú'
        },
        {
          estado_id: '20',
          cidade: 'Jaçanã'
        },
        {
          estado_id: '20',
          cidade: 'Jandaíra'
        },
        {
          estado_id: '20',
          cidade: 'Janduís'
        },
        {
          estado_id: '20',
          cidade: 'Januário Cicco'
        },
        {
          estado_id: '20',
          cidade: 'Japi'
        },
        {
          estado_id: '20',
          cidade: 'Jardim de Angicos'
        },
        {
          estado_id: '20',
          cidade: 'Jardim de Piranhas'
        },
        {
          estado_id: '20',
          cidade: 'Jardim do Seridó'
        },
        {
          estado_id: '20',
          cidade: 'João Câmara'
        },
        {
          estado_id: '20',
          cidade: 'João Dias'
        },
        {
          estado_id: '20',
          cidade: 'José da Penha'
        },
        {
          estado_id: '20',
          cidade: 'Jucurutu'
        },
        {
          estado_id: '20',
          cidade: 'Jundiá'
        },
        {
          estado_id: '20',
          cidade: 'Lagoa d Anta'
        },
        {
          estado_id: '20',
          cidade: 'Lagoa de Pedras'
        },
        {
          estado_id: '20',
          cidade: 'Lagoa de Velhos'
        },
        {
          estado_id: '20',
          cidade: 'Lagoa Nova'
        },
        {
          estado_id: '20',
          cidade: 'Lagoa Salgada'
        },
        {
          estado_id: '20',
          cidade: 'Lajes'
        },
        {
          estado_id: '20',
          cidade: 'Lajes Pintadas'
        },
        {
          estado_id: '20',
          cidade: 'Lucrécia'
        },
        {
          estado_id: '20',
          cidade: 'Luís Gomes'
        },
        {
          estado_id: '20',
          cidade: 'Macau'
        },
        {
          estado_id: '20',
          cidade: 'Major Sales'
        },
        {
          estado_id: '20',
          cidade: 'Marcelino Vieira'
        },
        {
          estado_id: '20',
          cidade: 'Martins'
        },
        {
          estado_id: '20',
          cidade: 'Maxaranguape'
        },
        {
          estado_id: '20',
          cidade: 'Messias Targino'
        },
        {
          estado_id: '20',
          cidade: 'Montanhas'
        },
        {
          estado_id: '20',
          cidade: 'Monte Alegre'
        },
        {
          estado_id: '20',
          cidade: 'Monte das Gameleiras'
        },
        {
          estado_id: '20',
          cidade: 'Mossoró'
        },
        {
          estado_id: '20',
          cidade: 'Nísia Floresta'
        },
        {
          estado_id: '20',
          cidade: 'Nova Cruz'
        },
        {
          estado_id: '20',
          cidade: 'Olho-d Água do Borges'
        },
        {
          estado_id: '20',
          cidade: 'Ouro Branco'
        },
        {
          estado_id: '20',
          cidade: 'Paraná'
        },
        {
          estado_id: '20',
          cidade: 'Paraú'
        },
        {
          estado_id: '20',
          cidade: 'Parazinho'
        },
        {
          estado_id: '20',
          cidade: 'Parelhas'
        },
        {
          estado_id: '20',
          cidade: 'Passa e Fica'
        },
        {
          estado_id: '20',
          cidade: 'Passagem'
        },
        {
          estado_id: '20',
          cidade: 'Patu'
        },
        {
          estado_id: '20',
          cidade: 'Pau dos Ferros'
        },
        {
          estado_id: '20',
          cidade: 'Pedra Grande'
        },
        {
          estado_id: '20',
          cidade: 'Pedra Preta'
        },
        {
          estado_id: '20',
          cidade: 'Pedro Avelino'
        },
        {
          estado_id: '20',
          cidade: 'Pedro Velho'
        },
        {
          estado_id: '20',
          cidade: 'Pendências'
        },
        {
          estado_id: '20',
          cidade: 'Pilões'
        },
        {
          estado_id: '20',
          cidade: 'Poço Branco'
        },
        {
          estado_id: '20',
          cidade: 'Portalegre'
        },
        {
          estado_id: '20',
          cidade: 'Porto do Mangue'
        },
        {
          estado_id: '20',
          cidade: 'Pureza'
        },
        {
          estado_id: '20',
          cidade: 'Rafael Fernandes'
        },
        {
          estado_id: '20',
          cidade: 'Rafael Godeiro'
        },
        {
          estado_id: '20',
          cidade: 'Riacho da Cruz'
        },
        {
          estado_id: '20',
          cidade: 'Riacho de Santana'
        },
        {
          estado_id: '20',
          cidade: 'Riachuelo'
        },
        {
          estado_id: '20',
          cidade: 'Rio do Fogo'
        },
        {
          estado_id: '20',
          cidade: 'Rodolfo Fernandes'
        },
        {
          estado_id: '20',
          cidade: 'Ruy Barbosa'
        },
        {
          estado_id: '20',
          cidade: 'Santa Cruz'
        },
        {
          estado_id: '20',
          cidade: 'Santa Maria'
        },
        {
          estado_id: '20',
          cidade: 'Santana do Matos'
        },
        {
          estado_id: '20',
          cidade: 'Santana do Seridó'
        },
        {
          estado_id: '20',
          cidade: 'Santo Antônio'
        },
        {
          estado_id: '20',
          cidade: 'São Bento do Norte'
        },
        {
          estado_id: '20',
          cidade: 'São Bento do Trairí'
        },
        {
          estado_id: '20',
          cidade: 'São Fernando'
        },
        {
          estado_id: '20',
          cidade: 'São Francisco do Oeste'
        },
        {
          estado_id: '20',
          cidade: 'São João do Sabugi'
        },
        {
          estado_id: '20',
          cidade: 'São José de Mipibu'
        },
        {
          estado_id: '20',
          cidade: 'São José do Campestre'
        },
        {
          estado_id: '20',
          cidade: 'São José do Seridó'
        },
        {
          estado_id: '20',
          cidade: 'São Miguel'
        },
        {
          estado_id: '20',
          cidade: 'São Miguel do Gostoso'
        },
        {
          estado_id: '20',
          cidade: 'São Paulo do Potengi'
        },
        {
          estado_id: '20',
          cidade: 'São Pedro'
        },
        {
          estado_id: '20',
          cidade: 'São Rafael'
        },
        {
          estado_id: '20',
          cidade: 'São Tomé'
        },
        {
          estado_id: '20',
          cidade: 'São Vicente'
        },
        {
          estado_id: '20',
          cidade: 'Senador Elói de Souza'
        },
        {
          estado_id: '20',
          cidade: 'Senador Georgino Avelino'
        },
        {
          estado_id: '20',
          cidade: 'Serra Caiada'
        },
        {
          estado_id: '20',
          cidade: 'Serra de São Bento'
        },
        {
          estado_id: '20',
          cidade: 'Serra do Mel'
        },
        {
          estado_id: '20',
          cidade: 'Serra Negra do Norte'
        },
        {
          estado_id: '20',
          cidade: 'Serrinha'
        },
        {
          estado_id: '20',
          cidade: 'Serrinha dos Pintos'
        },
        {
          estado_id: '20',
          cidade: 'Severiano Melo'
        },
        {
          estado_id: '20',
          cidade: 'Sítio Novo'
        },
        {
          estado_id: '20',
          cidade: 'Taboleiro Grande'
        },
        {
          estado_id: '20',
          cidade: 'Taipu'
        },
        {
          estado_id: '20',
          cidade: 'Tangará'
        },
        {
          estado_id: '20',
          cidade: 'Tenente Ananias'
        },
        {
          estado_id: '20',
          cidade: 'Tenente Laurentino Cruz'
        },
        {
          estado_id: '20',
          cidade: 'Tibau'
        },
        {
          estado_id: '20',
          cidade: 'Tibau do Sul'
        },
        {
          estado_id: '20',
          cidade: 'Timbaúba dos Batistas'
        },
        {
          estado_id: '20',
          cidade: 'Touros'
        },
        {
          estado_id: '20',
          cidade: 'Triunfo Potiguar'
        },
        {
          estado_id: '20',
          cidade: 'Umarizal'
        },
        {
          estado_id: '20',
          cidade: 'Upanema'
        },
        {
          estado_id: '20',
          cidade: 'Várzea'
        },
        {
          estado_id: '20',
          cidade: 'Venha-Ver'
        },
        {
          estado_id: '20',
          cidade: 'Vera Cruz'
        },
        {
          estado_id: '20',
          cidade: 'Viçosa'
        },
        {
          estado_id: '20',
          cidade: 'Vila Flor'
        },
        {
          estado_id: '20',
          cidade: 'São Gonçalo do Amarante'
        },
        {
          estado_id: '20',
          cidade: 'Natal'
        },
        {
          estado_id: '22',
          cidade: 'Alta Floresta d Oeste'
        },
        {
          estado_id: '22',
          cidade: 'Alto Alegre dos Parecis'
        },
        {
          estado_id: '22',
          cidade: 'Alto Paraíso'
        },
        {
          estado_id: '22',
          cidade: 'Alvorada d Oeste'
        },
        {
          estado_id: '22',
          cidade: 'Ariquemes'
        },
        {
          estado_id: '22',
          cidade: 'Buritis'
        },
        {
          estado_id: '22',
          cidade: 'Cabixi'
        },
        {
          estado_id: '22',
          cidade: 'Cacaulândia'
        },
        {
          estado_id: '22',
          cidade: 'Cacoal'
        },
        {
          estado_id: '22',
          cidade: 'Campo Novo de Rondônia'
        },
        {
          estado_id: '22',
          cidade: 'Castanheiras'
        },
        {
          estado_id: '22',
          cidade: 'Cerejeiras'
        },
        {
          estado_id: '22',
          cidade: 'Chupinguaia'
        },
        {
          estado_id: '22',
          cidade: 'Colorado do Oeste'
        },
        {
          estado_id: '22',
          cidade: 'Corumbiara'
        },
        {
          estado_id: '22',
          cidade: 'Costa Marques'
        },
        {
          estado_id: '22',
          cidade: 'Cujubim'
        },
        {
          estado_id: '22',
          cidade: 'Espigão d Oeste'
        },
        {
          estado_id: '22',
          cidade: 'Governador Jorge Teixeira'
        },
        {
          estado_id: '22',
          cidade: 'Guajará-Mirim'
        },
        {
          estado_id: '22',
          cidade: 'Itapuã do Oeste'
        },
        {
          estado_id: '22',
          cidade: 'Jaru'
        },
        {
          estado_id: '22',
          cidade: 'Machadinho d Oeste'
        },
        {
          estado_id: '22',
          cidade: 'Ministro Andreazza'
        },
        {
          estado_id: '22',
          cidade: 'Mirante da Serra'
        },
        {
          estado_id: '22',
          cidade: 'Monte Negro'
        },
        {
          estado_id: '22',
          cidade: 'Nova Brasilândia d Oeste'
        },
        {
          estado_id: '22',
          cidade: 'Nova Mamoré'
        },
        {
          estado_id: '22',
          cidade: 'Nova União'
        },
        {
          estado_id: '22',
          cidade: 'Novo Horizonte do Oeste'
        },
        {
          estado_id: '22',
          cidade: 'Ouro Preto do Oeste'
        },
        {
          estado_id: '22',
          cidade: 'Parecis'
        },
        {
          estado_id: '22',
          cidade: 'Pimenta Bueno'
        },
        {
          estado_id: '22',
          cidade: 'Pimenteiras do Oeste'
        },
        {
          estado_id: '22',
          cidade: 'Primavera de Rondônia'
        },
        {
          estado_id: '22',
          cidade: 'Rio Crespo'
        },
        {
          estado_id: '22',
          cidade: 'Rolim de Moura'
        },
        {
          estado_id: '22',
          cidade: 'Santa Luzia d Oeste'
        },
        {
          estado_id: '22',
          cidade: 'São Felipe d Oeste'
        },
        {
          estado_id: '22',
          cidade: 'São Francisco do Guaporé'
        },
        {
          estado_id: '22',
          cidade: 'São Miguel do Guaporé'
        },
        {
          estado_id: '22',
          cidade: 'Seringueiras'
        },
        {
          estado_id: '22',
          cidade: 'Teixeirópolis'
        },
        {
          estado_id: '22',
          cidade: 'Theobroma'
        },
        {
          estado_id: '22',
          cidade: 'Urupá'
        },
        {
          estado_id: '22',
          cidade: 'Vale do Anari'
        },
        {
          estado_id: '22',
          cidade: 'Vale do Paraíso'
        },
        {
          estado_id: '22',
          cidade: 'Vilhena'
        },
        {
          estado_id: '22',
          cidade: 'Presidente Médici'
        },
        {
          estado_id: '22',
          cidade: 'Candeias do Jamari'
        },
        {
          estado_id: '22',
          cidade: 'Ji-Paraná'
        },
        {
          estado_id: '22',
          cidade: 'Porto Velho'
        },
        {
          estado_id: '23',
          cidade: 'Alto Alegre'
        },
        {
          estado_id: '23',
          cidade: 'Amajari'
        },
        {
          estado_id: '23',
          cidade: 'Bonfim'
        },
        {
          estado_id: '23',
          cidade: 'Cantá'
        },
        {
          estado_id: '23',
          cidade: 'Caracaraí'
        },
        {
          estado_id: '23',
          cidade: 'Caroebe'
        },
        {
          estado_id: '23',
          cidade: 'Iracema'
        },
        {
          estado_id: '23',
          cidade: 'Mucajaí'
        },
        {
          estado_id: '23',
          cidade: 'Normandia'
        },
        {
          estado_id: '23',
          cidade: 'Pacaraima'
        },
        {
          estado_id: '23',
          cidade: 'Rorainópolis'
        },
        {
          estado_id: '23',
          cidade: 'São João da Baliza'
        },
        {
          estado_id: '23',
          cidade: 'São Luiz'
        },
        {
          estado_id: '23',
          cidade: 'Uiramutã'
        },
        {
          estado_id: '23',
          cidade: 'Boa Vista'
        },
        {
          estado_id: '21',
          cidade: 'Pelotas'
        },
        {
          estado_id: '21',
          cidade: 'Nova Pádua'
        },
        {
          estado_id: '21',
          cidade: 'Barão'
        },
        {
          estado_id: '21',
          cidade: 'Capão do Leão'
        },
        {
          estado_id: '21',
          cidade: 'Protásio Alves'
        },
        {
          estado_id: '21',
          cidade: 'São Jerônimo'
        },
        {
          estado_id: '21',
          cidade: 'Gramado'
        },
        {
          estado_id: '21',
          cidade: 'Itapuca'
        },
        {
          estado_id: '21',
          cidade: 'Sertão'
        },
        {
          estado_id: '21',
          cidade: 'Nova Roma do Sul'
        },
        {
          estado_id: '21',
          cidade: 'São Valentim do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Coronel Barros'
        },
        {
          estado_id: '21',
          cidade: 'Doutor Ricardo'
        },
        {
          estado_id: '21',
          cidade: 'Santa Bárbara do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Erebango'
        },
        {
          estado_id: '21',
          cidade: 'Fagundes Varela'
        },
        {
          estado_id: '21',
          cidade: 'Pinto Bandeira'
        },
        {
          estado_id: '21',
          cidade: 'Saldanha Marinho'
        },
        {
          estado_id: '21',
          cidade: 'São Pedro da Serra'
        },
        {
          estado_id: '21',
          cidade: 'Coqueiros do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Coronel Pilar'
        },
        {
          estado_id: '21',
          cidade: 'Charqueadas'
        },
        {
          estado_id: '21',
          cidade: 'Harmonia'
        },
        {
          estado_id: '21',
          cidade: 'Lagoa dos Três Cantos'
        },
        {
          estado_id: '21',
          cidade: 'Pouso Novo'
        },
        {
          estado_id: '21',
          cidade: 'Vista Alegre do Prata'
        },
        {
          estado_id: '21',
          cidade: 'Aceguá'
        },
        {
          estado_id: '21',
          cidade: 'Agudo'
        },
        {
          estado_id: '21',
          cidade: 'Ajuricaba'
        },
        {
          estado_id: '21',
          cidade: 'Alecrim'
        },
        {
          estado_id: '21',
          cidade: 'Alegrete'
        },
        {
          estado_id: '21',
          cidade: 'Alegria'
        },
        {
          estado_id: '21',
          cidade: 'Almirante Tamandaré do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Alpestre'
        },
        {
          estado_id: '21',
          cidade: 'Alto Alegre'
        },
        {
          estado_id: '21',
          cidade: 'Alto Feliz'
        },
        {
          estado_id: '21',
          cidade: 'Amaral Ferrador'
        },
        {
          estado_id: '21',
          cidade: 'Ametista do Sul'
        },
        {
          estado_id: '21',
          cidade: 'André da Rocha'
        },
        {
          estado_id: '21',
          cidade: 'Anta Gorda'
        },
        {
          estado_id: '21',
          cidade: 'Antônio Prado'
        },
        {
          estado_id: '21',
          cidade: 'Arambaré'
        },
        {
          estado_id: '21',
          cidade: 'Araricá'
        },
        {
          estado_id: '21',
          cidade: 'Aratiba'
        },
        {
          estado_id: '21',
          cidade: 'Arroio do Meio'
        },
        {
          estado_id: '21',
          cidade: 'Arroio do Padre'
        },
        {
          estado_id: '21',
          cidade: 'Arroio do Sal'
        },
        {
          estado_id: '21',
          cidade: 'Arroio do Tigre'
        },
        {
          estado_id: '21',
          cidade: 'Arroio dos Ratos'
        },
        {
          estado_id: '21',
          cidade: 'Arroio Grande'
        },
        {
          estado_id: '21',
          cidade: 'Arvorezinha'
        },
        {
          estado_id: '21',
          cidade: 'Augusto Pestana'
        },
        {
          estado_id: '21',
          cidade: 'Áurea'
        },
        {
          estado_id: '21',
          cidade: 'Bagé'
        },
        {
          estado_id: '21',
          cidade: 'Balneário Pinhal'
        },
        {
          estado_id: '21',
          cidade: 'Barão de Cotegipe'
        },
        {
          estado_id: '21',
          cidade: 'Barão do Triunfo'
        },
        {
          estado_id: '21',
          cidade: 'Barra do Guarita'
        },
        {
          estado_id: '21',
          cidade: 'Barra do Quaraí'
        },
        {
          estado_id: '21',
          cidade: 'Barra do Rio Azul'
        },
        {
          estado_id: '21',
          cidade: 'Barra Funda'
        },
        {
          estado_id: '21',
          cidade: 'Barracão'
        },
        {
          estado_id: '21',
          cidade: 'Barros Cassal'
        },
        {
          estado_id: '21',
          cidade: 'Benjamin Constant do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Bento Gonçalves'
        },
        {
          estado_id: '21',
          cidade: 'Boa Vista das Missões'
        },
        {
          estado_id: '21',
          cidade: 'Boa Vista do Buricá'
        },
        {
          estado_id: '21',
          cidade: 'Boa Vista do Incra'
        },
        {
          estado_id: '21',
          cidade: 'Boa Vista do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Bom Jesus'
        },
        {
          estado_id: '21',
          cidade: 'Bom Princípio'
        },
        {
          estado_id: '21',
          cidade: 'Bom Progresso'
        },
        {
          estado_id: '21',
          cidade: 'Bom Retiro do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Boqueirão do Leão'
        },
        {
          estado_id: '21',
          cidade: 'Bossoroca'
        },
        {
          estado_id: '21',
          cidade: 'Braga'
        },
        {
          estado_id: '21',
          cidade: 'Brochier'
        },
        {
          estado_id: '21',
          cidade: 'Butiá'
        },
        {
          estado_id: '21',
          cidade: 'Caçapava do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Cacequi'
        },
        {
          estado_id: '21',
          cidade: 'Cachoeira do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Cacique Doble'
        },
        {
          estado_id: '21',
          cidade: 'Caibaté'
        },
        {
          estado_id: '21',
          cidade: 'Caiçara'
        },
        {
          estado_id: '21',
          cidade: 'Camaquã'
        },
        {
          estado_id: '21',
          cidade: 'Camargo'
        },
        {
          estado_id: '21',
          cidade: 'Cambará do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Campestre da Serra'
        },
        {
          estado_id: '21',
          cidade: 'Campina das Missões'
        },
        {
          estado_id: '21',
          cidade: 'Campinas do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Campo Novo'
        },
        {
          estado_id: '21',
          cidade: 'Campos Borges'
        },
        {
          estado_id: '21',
          cidade: 'Candelária'
        },
        {
          estado_id: '21',
          cidade: 'Cândido Godói'
        },
        {
          estado_id: '21',
          cidade: 'Candiota'
        },
        {
          estado_id: '21',
          cidade: 'Canguçu'
        },
        {
          estado_id: '21',
          cidade: 'Canudos do Vale'
        },
        {
          estado_id: '21',
          cidade: 'Capão Bonito do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Capão da Canoa'
        },
        {
          estado_id: '21',
          cidade: 'Capão do Cipó'
        },
        {
          estado_id: '21',
          cidade: 'Capela de Santana'
        },
        {
          estado_id: '21',
          cidade: 'Capitão'
        },
        {
          estado_id: '21',
          cidade: 'Caraá'
        },
        {
          estado_id: '21',
          cidade: 'Carlos Barbosa'
        },
        {
          estado_id: '21',
          cidade: 'Carlos Gomes'
        },
        {
          estado_id: '21',
          cidade: 'Casca'
        },
        {
          estado_id: '21',
          cidade: 'Caseiros'
        },
        {
          estado_id: '21',
          cidade: 'Catuípe'
        },
        {
          estado_id: '21',
          cidade: 'Centenário'
        },
        {
          estado_id: '21',
          cidade: 'Cerrito'
        },
        {
          estado_id: '21',
          cidade: 'Cerro Branco'
        },
        {
          estado_id: '21',
          cidade: 'Cerro Grande'
        },
        {
          estado_id: '21',
          cidade: 'Cerro Grande do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Cerro Largo'
        },
        {
          estado_id: '21',
          cidade: 'Chapada'
        },
        {
          estado_id: '21',
          cidade: 'Charrua'
        },
        {
          estado_id: '21',
          cidade: 'Chiapetta'
        },
        {
          estado_id: '21',
          cidade: 'Chuí'
        },
        {
          estado_id: '21',
          cidade: 'Chuvisca'
        },
        {
          estado_id: '21',
          cidade: 'Cidreira'
        },
        {
          estado_id: '21',
          cidade: 'Ciríaco'
        },
        {
          estado_id: '21',
          cidade: 'Colinas'
        },
        {
          estado_id: '21',
          cidade: 'Colorado'
        },
        {
          estado_id: '21',
          cidade: 'Constantina'
        },
        {
          estado_id: '21',
          cidade: 'Coqueiro Baixo'
        },
        {
          estado_id: '21',
          cidade: 'Coronel Bicaco'
        },
        {
          estado_id: '21',
          cidade: 'Crissiumal'
        },
        {
          estado_id: '21',
          cidade: 'Cristal'
        },
        {
          estado_id: '21',
          cidade: 'Cristal do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Cruz Alta'
        },
        {
          estado_id: '21',
          cidade: 'Cruzaltense'
        },
        {
          estado_id: '21',
          cidade: 'Cruzeiro do Sul'
        },
        {
          estado_id: '21',
          cidade: 'David Canabarro'
        },
        {
          estado_id: '21',
          cidade: 'Derrubadas'
        },
        {
          estado_id: '21',
          cidade: 'Dezesseis de Novembro'
        },
        {
          estado_id: '21',
          cidade: 'Dilermando de Aguiar'
        },
        {
          estado_id: '21',
          cidade: 'Dois Irmãos'
        },
        {
          estado_id: '21',
          cidade: 'Dois Irmãos das Missões'
        },
        {
          estado_id: '21',
          cidade: 'Dois Lajeados'
        },
        {
          estado_id: '21',
          cidade: 'Dom Feliciano'
        },
        {
          estado_id: '21',
          cidade: 'Dom Pedrito'
        },
        {
          estado_id: '21',
          cidade: 'Dom Pedro de Alcântara'
        },
        {
          estado_id: '21',
          cidade: 'Dona Francisca'
        },
        {
          estado_id: '21',
          cidade: 'Doutor Maurício Cardoso'
        },
        {
          estado_id: '21',
          cidade: 'Encantado'
        },
        {
          estado_id: '21',
          cidade: 'Encruzilhada do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Engenho Velho'
        },
        {
          estado_id: '21',
          cidade: 'Entre Rios do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Entre-Ijuís'
        },
        {
          estado_id: '21',
          cidade: 'Erechim'
        },
        {
          estado_id: '21',
          cidade: 'Ernestina'
        },
        {
          estado_id: '21',
          cidade: 'Erval Grande'
        },
        {
          estado_id: '21',
          cidade: 'Erval Seco'
        },
        {
          estado_id: '21',
          cidade: 'Esmeralda'
        },
        {
          estado_id: '21',
          cidade: 'Esperança do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Espumoso'
        },
        {
          estado_id: '21',
          cidade: 'Estância Velha'
        },
        {
          estado_id: '21',
          cidade: 'Estrela'
        },
        {
          estado_id: '21',
          cidade: 'Estrela Velha'
        },
        {
          estado_id: '21',
          cidade: 'Eugênio de Castro'
        },
        {
          estado_id: '21',
          cidade: 'Faxinal do Soturno'
        },
        {
          estado_id: '21',
          cidade: 'Faxinalzinho'
        },
        {
          estado_id: '21',
          cidade: 'Fazenda Vilanova'
        },
        {
          estado_id: '21',
          cidade: 'Feliz'
        },
        {
          estado_id: '21',
          cidade: 'Flores da Cunha'
        },
        {
          estado_id: '21',
          cidade: 'Floriano Peixoto'
        },
        {
          estado_id: '21',
          cidade: 'Fontoura Xavier'
        },
        {
          estado_id: '21',
          cidade: 'Formigueiro'
        },
        {
          estado_id: '21',
          cidade: 'Forquetinha'
        },
        {
          estado_id: '21',
          cidade: 'Fortaleza dos Valos'
        },
        {
          estado_id: '21',
          cidade: 'Frederico Westphalen'
        },
        {
          estado_id: '21',
          cidade: 'Garibaldi'
        },
        {
          estado_id: '21',
          cidade: 'Garruchos'
        },
        {
          estado_id: '21',
          cidade: 'Gaurama'
        },
        {
          estado_id: '21',
          cidade: 'Gentil'
        },
        {
          estado_id: '21',
          cidade: 'Getúlio Vargas'
        },
        {
          estado_id: '21',
          cidade: 'Giruá'
        },
        {
          estado_id: '21',
          cidade: 'Gramado dos Loureiros'
        },
        {
          estado_id: '21',
          cidade: 'Gramado Xavier'
        },
        {
          estado_id: '21',
          cidade: 'Guabiju'
        },
        {
          estado_id: '21',
          cidade: 'Guaporé'
        },
        {
          estado_id: '21',
          cidade: 'Guarani das Missões'
        },
        {
          estado_id: '21',
          cidade: 'Herval'
        },
        {
          estado_id: '21',
          cidade: 'Herveiras'
        },
        {
          estado_id: '21',
          cidade: 'Horizontina'
        },
        {
          estado_id: '21',
          cidade: 'Hulha Negra'
        },
        {
          estado_id: '21',
          cidade: 'Humaitá'
        },
        {
          estado_id: '21',
          cidade: 'Ibarama'
        },
        {
          estado_id: '21',
          cidade: 'Ibiaçá'
        },
        {
          estado_id: '21',
          cidade: 'Ibiraiaras'
        },
        {
          estado_id: '21',
          cidade: 'Ibirubá'
        },
        {
          estado_id: '21',
          cidade: 'Igrejinha'
        },
        {
          estado_id: '21',
          cidade: 'Ijuí'
        },
        {
          estado_id: '21',
          cidade: 'Ilópolis'
        },
        {
          estado_id: '21',
          cidade: 'Imbé'
        },
        {
          estado_id: '21',
          cidade: 'Imigrante'
        },
        {
          estado_id: '21',
          cidade: 'Independência'
        },
        {
          estado_id: '21',
          cidade: 'Inhacorá'
        },
        {
          estado_id: '21',
          cidade: 'Ipê'
        },
        {
          estado_id: '21',
          cidade: 'Ipiranga do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Iraí'
        },
        {
          estado_id: '21',
          cidade: 'Itaara'
        },
        {
          estado_id: '21',
          cidade: 'Itacurubi'
        },
        {
          estado_id: '21',
          cidade: 'Itaqui'
        },
        {
          estado_id: '21',
          cidade: 'Itati'
        },
        {
          estado_id: '21',
          cidade: 'Itatiba do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Ivorá'
        },
        {
          estado_id: '21',
          cidade: 'Ivoti'
        },
        {
          estado_id: '21',
          cidade: 'Jaboticaba'
        },
        {
          estado_id: '21',
          cidade: 'Jacuizinho'
        },
        {
          estado_id: '21',
          cidade: 'Jacutinga'
        },
        {
          estado_id: '21',
          cidade: 'Jaguarão'
        },
        {
          estado_id: '21',
          cidade: 'Jaguari'
        },
        {
          estado_id: '21',
          cidade: 'Jaquirana'
        },
        {
          estado_id: '21',
          cidade: 'Jari'
        },
        {
          estado_id: '21',
          cidade: 'Jóia'
        },
        {
          estado_id: '21',
          cidade: 'Júlio de Castilhos'
        },
        {
          estado_id: '21',
          cidade: 'Lagoa Bonita do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Lagoa Vermelha'
        },
        {
          estado_id: '21',
          cidade: 'Lagoão'
        },
        {
          estado_id: '21',
          cidade: 'Lajeado'
        },
        {
          estado_id: '21',
          cidade: 'Lajeado do Bugre'
        },
        {
          estado_id: '21',
          cidade: 'Lavras do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Liberato Salzano'
        },
        {
          estado_id: '21',
          cidade: 'Lindolfo Collor'
        },
        {
          estado_id: '21',
          cidade: 'Maçambará'
        },
        {
          estado_id: '21',
          cidade: 'Machadinho'
        },
        {
          estado_id: '21',
          cidade: 'Mampituba'
        },
        {
          estado_id: '21',
          cidade: 'Manoel Viana'
        },
        {
          estado_id: '21',
          cidade: 'Maquiné'
        },
        {
          estado_id: '21',
          cidade: 'Maratá'
        },
        {
          estado_id: '21',
          cidade: 'Marau'
        },
        {
          estado_id: '21',
          cidade: 'Marcelino Ramos'
        },
        {
          estado_id: '21',
          cidade: 'Mariana Pimentel'
        },
        {
          estado_id: '21',
          cidade: 'Mariano Moro'
        },
        {
          estado_id: '21',
          cidade: 'Marques de Souza'
        },
        {
          estado_id: '21',
          cidade: 'Mata'
        },
        {
          estado_id: '21',
          cidade: 'Mato Leitão'
        },
        {
          estado_id: '21',
          cidade: 'Mato Queimado'
        },
        {
          estado_id: '21',
          cidade: 'Maximiliano de Almeida'
        },
        {
          estado_id: '21',
          cidade: 'Minas do Leão'
        },
        {
          estado_id: '21',
          cidade: 'Miraguaí'
        },
        {
          estado_id: '21',
          cidade: 'Montauri'
        },
        {
          estado_id: '21',
          cidade: 'Monte Alegre dos Campos'
        },
        {
          estado_id: '21',
          cidade: 'Morrinhos do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Morro Redondo'
        },
        {
          estado_id: '21',
          cidade: 'Mostardas'
        },
        {
          estado_id: '21',
          cidade: 'Muçum'
        },
        {
          estado_id: '21',
          cidade: 'Muitos Capões'
        },
        {
          estado_id: '21',
          cidade: 'Muliterno'
        },
        {
          estado_id: '21',
          cidade: 'Não-Me-Toque'
        },
        {
          estado_id: '21',
          cidade: 'Nonoai'
        },
        {
          estado_id: '21',
          cidade: 'Nova Alvorada'
        },
        {
          estado_id: '21',
          cidade: 'Nova Araçá'
        },
        {
          estado_id: '21',
          cidade: 'Nova Bassano'
        },
        {
          estado_id: '21',
          cidade: 'Nova Boa Vista'
        },
        {
          estado_id: '21',
          cidade: 'Nova Bréscia'
        },
        {
          estado_id: '21',
          cidade: 'Nova Candelária'
        },
        {
          estado_id: '21',
          cidade: 'Nova Esperança do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Nova Hartz'
        },
        {
          estado_id: '21',
          cidade: 'Nova Palma'
        },
        {
          estado_id: '21',
          cidade: 'Nova Prata'
        },
        {
          estado_id: '21',
          cidade: 'Novo Barreiro'
        },
        {
          estado_id: '21',
          cidade: 'Novo Cabrais'
        },
        {
          estado_id: '21',
          cidade: 'Novo Machado'
        },
        {
          estado_id: '21',
          cidade: 'Novo Tiradentes'
        },
        {
          estado_id: '21',
          cidade: 'Novo Xingu'
        },
        {
          estado_id: '21',
          cidade: 'Osório'
        },
        {
          estado_id: '21',
          cidade: 'Paim Filho'
        },
        {
          estado_id: '21',
          cidade: 'Palmeira das Missões'
        },
        {
          estado_id: '21',
          cidade: 'Palmitinho'
        },
        {
          estado_id: '21',
          cidade: 'Pantano Grande'
        },
        {
          estado_id: '21',
          cidade: 'Paraí'
        },
        {
          estado_id: '21',
          cidade: 'Paraíso do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Pareci Novo'
        },
        {
          estado_id: '21',
          cidade: 'Parobé'
        },
        {
          estado_id: '21',
          cidade: 'Passa Sete'
        },
        {
          estado_id: '21',
          cidade: 'Passo do Sobrado'
        },
        {
          estado_id: '21',
          cidade: 'Paulo Bento'
        },
        {
          estado_id: '21',
          cidade: 'Paverama'
        },
        {
          estado_id: '21',
          cidade: 'Pedras Altas'
        },
        {
          estado_id: '21',
          cidade: 'Pedro Osório'
        },
        {
          estado_id: '21',
          cidade: 'Pejuçara'
        },
        {
          estado_id: '21',
          cidade: 'Picada Café'
        },
        {
          estado_id: '21',
          cidade: 'Pinhal'
        },
        {
          estado_id: '21',
          cidade: 'Pinhal da Serra'
        },
        {
          estado_id: '21',
          cidade: 'Pinhal Grande'
        },
        {
          estado_id: '21',
          cidade: 'Pinheirinho do Vale'
        },
        {
          estado_id: '21',
          cidade: 'Pinheiro Machado'
        },
        {
          estado_id: '21',
          cidade: 'Pirapó'
        },
        {
          estado_id: '21',
          cidade: 'Piratini'
        },
        {
          estado_id: '21',
          cidade: 'Planalto'
        },
        {
          estado_id: '21',
          cidade: 'Poço das Antas'
        },
        {
          estado_id: '21',
          cidade: 'Ponte Preta'
        },
        {
          estado_id: '21',
          cidade: 'Porto Lucena'
        },
        {
          estado_id: '21',
          cidade: 'Porto Mauá'
        },
        {
          estado_id: '21',
          cidade: 'Porto Vera Cruz'
        },
        {
          estado_id: '21',
          cidade: 'Porto Xavier'
        },
        {
          estado_id: '21',
          cidade: 'Presidente Lucena'
        },
        {
          estado_id: '21',
          cidade: 'Progresso'
        },
        {
          estado_id: '21',
          cidade: 'Putinga'
        },
        {
          estado_id: '21',
          cidade: 'Quaraí'
        },
        {
          estado_id: '21',
          cidade: 'Quatro Irmãos'
        },
        {
          estado_id: '21',
          cidade: 'Quevedos'
        },
        {
          estado_id: '21',
          cidade: 'Quinze de Novembro'
        },
        {
          estado_id: '21',
          cidade: 'Redentora'
        },
        {
          estado_id: '21',
          cidade: 'Relvado'
        },
        {
          estado_id: '21',
          cidade: 'Restinga Sêca'
        },
        {
          estado_id: '21',
          cidade: 'Rio dos Índios'
        },
        {
          estado_id: '21',
          cidade: 'Rio Pardo'
        },
        {
          estado_id: '21',
          cidade: 'Riozinho'
        },
        {
          estado_id: '21',
          cidade: 'Roca Sales'
        },
        {
          estado_id: '21',
          cidade: 'Rodeio Bonito'
        },
        {
          estado_id: '21',
          cidade: 'Rolador'
        },
        {
          estado_id: '21',
          cidade: 'Rolante'
        },
        {
          estado_id: '21',
          cidade: 'Ronda Alta'
        },
        {
          estado_id: '21',
          cidade: 'Rondinha'
        },
        {
          estado_id: '21',
          cidade: 'Roque Gonzales'
        },
        {
          estado_id: '21',
          cidade: 'Rosário do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Sagrada Família'
        },
        {
          estado_id: '21',
          cidade: 'Salto do Jacuí'
        },
        {
          estado_id: '21',
          cidade: 'Salvador das Missões'
        },
        {
          estado_id: '21',
          cidade: 'Salvador do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Sananduva'
        },
        {
          estado_id: '21',
          cidade: 'Santa Cecília do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Santa Clara do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Santa Cruz do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Santa Margarida do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Santa Maria'
        },
        {
          estado_id: '21',
          cidade: 'Santa Maria do Herval'
        },
        {
          estado_id: '21',
          cidade: 'Santa Rosa'
        },
        {
          estado_id: '21',
          cidade: 'Santa Tereza'
        },
        {
          estado_id: '21',
          cidade: 'Santa Vitória do Palmar'
        },
        {
          estado_id: '21',
          cidade: 'Santana da Boa Vista'
        },
        {
          estado_id: '21',
          cidade: 'Santiago'
        },
        {
          estado_id: '21',
          cidade: 'Santo Ângelo'
        },
        {
          estado_id: '21',
          cidade: 'Santo Antônio da Patrulha'
        },
        {
          estado_id: '21',
          cidade: 'Santo Antônio das Missões'
        },
        {
          estado_id: '21',
          cidade: 'Santo Antônio do Palma'
        },
        {
          estado_id: '21',
          cidade: 'Santo Antônio do Planalto'
        },
        {
          estado_id: '21',
          cidade: 'Santo Augusto'
        },
        {
          estado_id: '21',
          cidade: 'Santo Cristo'
        },
        {
          estado_id: '21',
          cidade: 'Santo Expedito do Sul'
        },
        {
          estado_id: '21',
          cidade: 'São Borja'
        },
        {
          estado_id: '21',
          cidade: 'São Domingos do Sul'
        },
        {
          estado_id: '21',
          cidade: 'São Francisco de Assis'
        },
        {
          estado_id: '21',
          cidade: 'São Francisco de Paula'
        },
        {
          estado_id: '21',
          cidade: 'São Gabriel'
        },
        {
          estado_id: '21',
          cidade: 'São João da Urtiga'
        },
        {
          estado_id: '21',
          cidade: 'São João do Polêsine'
        },
        {
          estado_id: '21',
          cidade: 'São Jorge'
        },
        {
          estado_id: '21',
          cidade: 'São José das Missões'
        },
        {
          estado_id: '21',
          cidade: 'São José do Herval'
        },
        {
          estado_id: '21',
          cidade: 'São José do Hortêncio'
        },
        {
          estado_id: '21',
          cidade: 'São José do Inhacorá'
        },
        {
          estado_id: '21',
          cidade: 'São José do Ouro'
        },
        {
          estado_id: '21',
          cidade: 'São José do Sul'
        },
        {
          estado_id: '21',
          cidade: 'São José dos Ausentes'
        },
        {
          estado_id: '21',
          cidade: 'São Lourenço do Sul'
        },
        {
          estado_id: '21',
          cidade: 'São Luiz Gonzaga'
        },
        {
          estado_id: '21',
          cidade: 'São Marcos'
        },
        {
          estado_id: '21',
          cidade: 'São Martinho'
        },
        {
          estado_id: '21',
          cidade: 'São Martinho da Serra'
        },
        {
          estado_id: '21',
          cidade: 'São Miguel das Missões'
        },
        {
          estado_id: '21',
          cidade: 'São Nicolau'
        },
        {
          estado_id: '21',
          cidade: 'São Paulo das Missões'
        },
        {
          estado_id: '21',
          cidade: 'São Pedro das Missões'
        },
        {
          estado_id: '21',
          cidade: 'São Pedro do Butiá'
        },
        {
          estado_id: '21',
          cidade: 'São Pedro do Sul'
        },
        {
          estado_id: '21',
          cidade: 'São Sebastião do Caí'
        },
        {
          estado_id: '21',
          cidade: 'São Sepé'
        },
        {
          estado_id: '21',
          cidade: 'São Valentim'
        },
        {
          estado_id: '21',
          cidade: 'São Valério do Sul'
        },
        {
          estado_id: '21',
          cidade: 'São Vendelino'
        },
        {
          estado_id: '21',
          cidade: 'São Vicente do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Sapiranga'
        },
        {
          estado_id: '21',
          cidade: 'Sarandi'
        },
        {
          estado_id: '21',
          cidade: 'Seberi'
        },
        {
          estado_id: '21',
          cidade: 'Sede Nova'
        },
        {
          estado_id: '21',
          cidade: 'Segredo'
        },
        {
          estado_id: '21',
          cidade: 'Selbach'
        },
        {
          estado_id: '21',
          cidade: 'Senador Salgado Filho'
        },
        {
          estado_id: '21',
          cidade: 'Sentinela do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Serafina Corrêa'
        },
        {
          estado_id: '21',
          cidade: 'Sério'
        },
        {
          estado_id: '21',
          cidade: 'Sertão Santana'
        },
        {
          estado_id: '21',
          cidade: 'Sete de Setembro'
        },
        {
          estado_id: '21',
          cidade: 'Severiano de Almeida'
        },
        {
          estado_id: '21',
          cidade: 'Silveira Martins'
        },
        {
          estado_id: '21',
          cidade: 'Sinimbu'
        },
        {
          estado_id: '21',
          cidade: 'Sobradinho'
        },
        {
          estado_id: '21',
          cidade: 'Soledade'
        },
        {
          estado_id: '21',
          cidade: 'Tabaí'
        },
        {
          estado_id: '21',
          cidade: 'Tapejara'
        },
        {
          estado_id: '21',
          cidade: 'Tapera'
        },
        {
          estado_id: '21',
          cidade: 'Tapes'
        },
        {
          estado_id: '21',
          cidade: 'Taquara'
        },
        {
          estado_id: '21',
          cidade: 'Taquari'
        },
        {
          estado_id: '21',
          cidade: 'Taquaruçu do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Tavares'
        },
        {
          estado_id: '21',
          cidade: 'Tenente Portela'
        },
        {
          estado_id: '21',
          cidade: 'Terra de Areia'
        },
        {
          estado_id: '21',
          cidade: 'Teutônia'
        },
        {
          estado_id: '21',
          cidade: 'Tio Hugo'
        },
        {
          estado_id: '21',
          cidade: 'Tiradentes do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Toropi'
        },
        {
          estado_id: '21',
          cidade: 'Torres'
        },
        {
          estado_id: '21',
          cidade: 'Tramandaí'
        },
        {
          estado_id: '21',
          cidade: 'Travesseiro'
        },
        {
          estado_id: '21',
          cidade: 'Três Arroios'
        },
        {
          estado_id: '21',
          cidade: 'Três Cachoeiras'
        },
        {
          estado_id: '21',
          cidade: 'Três Coroas'
        },
        {
          estado_id: '21',
          cidade: 'Três de Maio'
        },
        {
          estado_id: '21',
          cidade: 'Três Forquilhas'
        },
        {
          estado_id: '21',
          cidade: 'Três Palmeiras'
        },
        {
          estado_id: '21',
          cidade: 'Três Passos'
        },
        {
          estado_id: '21',
          cidade: 'Trindade do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Tucunduva'
        },
        {
          estado_id: '21',
          cidade: 'Tunas'
        },
        {
          estado_id: '21',
          cidade: 'Tupanci do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Tupanciretã'
        },
        {
          estado_id: '21',
          cidade: 'Tupandi'
        },
        {
          estado_id: '21',
          cidade: 'Tuparendi'
        },
        {
          estado_id: '21',
          cidade: 'Turuçu'
        },
        {
          estado_id: '21',
          cidade: 'Ubiretama'
        },
        {
          estado_id: '21',
          cidade: 'União da Serra'
        },
        {
          estado_id: '21',
          cidade: 'Unistalda'
        },
        {
          estado_id: '21',
          cidade: 'Vacaria'
        },
        {
          estado_id: '21',
          cidade: 'Vale do Sol'
        },
        {
          estado_id: '21',
          cidade: 'Vale Real'
        },
        {
          estado_id: '21',
          cidade: 'Vale Verde'
        },
        {
          estado_id: '21',
          cidade: 'Vanini'
        },
        {
          estado_id: '21',
          cidade: 'Venâncio Aires'
        },
        {
          estado_id: '21',
          cidade: 'Vera Cruz'
        },
        {
          estado_id: '21',
          cidade: 'Veranópolis'
        },
        {
          estado_id: '21',
          cidade: 'Viadutos'
        },
        {
          estado_id: '21',
          cidade: 'Vicente Dutra'
        },
        {
          estado_id: '21',
          cidade: 'Victor Graeff'
        },
        {
          estado_id: '21',
          cidade: 'Vila Lângaro'
        },
        {
          estado_id: '21',
          cidade: 'Vila Maria'
        },
        {
          estado_id: '21',
          cidade: 'Vila Nova do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Vista Alegre'
        },
        {
          estado_id: '21',
          cidade: 'Vista Gaúcha'
        },
        {
          estado_id: '21',
          cidade: 'Vitória das Missões'
        },
        {
          estado_id: '21',
          cidade: 'Westfália'
        },
        {
          estado_id: '21',
          cidade: 'Xangri-lá'
        },
        {
          estado_id: '21',
          cidade: 'Nova Petrópolis'
        },
        {
          estado_id: '21',
          cidade: 'Água Santa'
        },
        {
          estado_id: '21',
          cidade: 'Boa Vista do Cadeado'
        },
        {
          estado_id: '21',
          cidade: 'Eldorado do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Palmares do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Estação'
        },
        {
          estado_id: '21',
          cidade: 'Mormaço'
        },
        {
          estado_id: '21',
          cidade: 'Nova Ramada'
        },
        {
          estado_id: '21',
          cidade: 'Montenegro'
        },
        {
          estado_id: '21',
          cidade: 'General Câmara'
        },
        {
          estado_id: '21',
          cidade: 'Glorinha'
        },
        {
          estado_id: '21',
          cidade: 'Pontão'
        },
        {
          estado_id: '21',
          cidade: 'Capivari do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Caxias do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Vila Flores'
        },
        {
          estado_id: '21',
          cidade: 'Monte Belo do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Campo Bom'
        },
        {
          estado_id: '21',
          cidade: 'Cotiporã'
        },
        {
          estado_id: '21',
          cidade: 'Linha Nova'
        },
        {
          estado_id: '21',
          cidade: 'Coxilha'
        },
        {
          estado_id: '21',
          cidade: 'Vespasiano Corrêa'
        },
        {
          estado_id: '21',
          cidade: 'Canela'
        },
        {
          estado_id: '21',
          cidade: 'Carazinho'
        },
        {
          estado_id: '21',
          cidade: 'São José do Norte'
        },
        {
          estado_id: '21',
          cidade: 'Triunfo'
        },
        {
          estado_id: '21',
          cidade: 'Viamão'
        },
        {
          estado_id: '21',
          cidade: 'Rio Grande'
        },
        {
          estado_id: '21',
          cidade: 'Mato Castelhano'
        },
        {
          estado_id: '21',
          cidade: 'Ibirapuitã'
        },
        {
          estado_id: '21',
          cidade: 'Bozano'
        },
        {
          estado_id: '21',
          cidade: 'Nicolau Vergueiro'
        },
        {
          estado_id: '21',
          cidade: 'Morro Reuter'
        },
        {
          estado_id: '21',
          cidade: 'Portão'
        },
        {
          estado_id: '21',
          cidade: 'Alvorada'
        },
        {
          estado_id: '21',
          cidade: 'Barra do Ribeiro'
        },
        {
          estado_id: '21',
          cidade: 'Novo Hamburgo'
        },
        {
          estado_id: '21',
          cidade: 'Nova Santa Rita'
        },
        {
          estado_id: '21',
          cidade: 'Guaíba'
        },
        {
          estado_id: '21',
          cidade: 'Esteio'
        },
        {
          estado_id: '21',
          cidade: 'Panambi'
        },
        {
          estado_id: '21',
          cidade: 'Condor'
        },
        {
          estado_id: '21',
          cidade: 'Porto Alegre'
        },
        {
          estado_id: '21',
          cidade: 'Cachoeirinha'
        },
        {
          estado_id: '21',
          cidade: 'Canoas'
        },
        {
          estado_id: '21',
          cidade: 'Sant Ana do Livramento'
        }, {
          estado_id: '21',
          cidade: 'Farroupilha'
        },
        {
          estado_id: '21',
          cidade: 'São Leopoldo'
        },
        {
          estado_id: '21',
          cidade: 'Sapucaia do Sul'
        },
        {
          estado_id: '21',
          cidade: 'Passo Fundo'
        },
        {
          estado_id: '21',
          cidade: 'Uruguaiana'
        },
        {
          estado_id: '21',
          cidade: 'Gravataí'
        },
        {
          estado_id: '24',
          cidade: 'Blumenau'
        },
        {
          estado_id: '24',
          cidade: 'Itajaí'
        },
        {
          estado_id: '24',
          cidade: 'Guabiruba'
        },
        {
          estado_id: '24',
          cidade: 'Massaranduba'
        },
        {
          estado_id: '24',
          cidade: 'Garuva'
        },
        {
          estado_id: '24',
          cidade: 'Bombinhas'
        },
        {
          estado_id: '24',
          cidade: 'Pomerode'
        },
        {
          estado_id: '24',
          cidade: 'Balneário Camboriú'
        },
        {
          estado_id: '24',
          cidade: 'Garopaba'
        },
        {
          estado_id: '24',
          cidade: 'Gaspar'
        },
        {
          estado_id: '24',
          cidade: 'São Pedro de Alcântara'
        },
        {
          estado_id: '24',
          cidade: 'Botuverá'
        },
        {
          estado_id: '24',
          cidade: 'Abdon Batista'
        },
        {
          estado_id: '24',
          cidade: 'Abelardo Luz'
        },
        {
          estado_id: '24',
          cidade: 'Agrolândia'
        },
        {
          estado_id: '24',
          cidade: 'Agronômica'
        },
        {
          estado_id: '24',
          cidade: 'Água Doce'
        },
        {
          estado_id: '24',
          cidade: 'Águas de Chapecó'
        },
        {
          estado_id: '24',
          cidade: 'Águas Frias'
        },
        {
          estado_id: '24',
          cidade: 'Águas Mornas'
        },
        {
          estado_id: '24',
          cidade: 'Alfredo Wagner'
        },
        {
          estado_id: '24',
          cidade: 'Alto Bela Vista'
        },
        {
          estado_id: '24',
          cidade: 'Anchieta'
        },
        {
          estado_id: '24',
          cidade: 'Angelina'
        },
        {
          estado_id: '24',
          cidade: 'Anita Garibaldi'
        },
        {
          estado_id: '24',
          cidade: 'Anitápolis'
        },
        {
          estado_id: '24',
          cidade: 'Antônio Carlos'
        },
        {
          estado_id: '24',
          cidade: 'Apiúna'
        },
        {
          estado_id: '24',
          cidade: 'Arabutã'
        },
        {
          estado_id: '24',
          cidade: 'Armazém'
        },
        {
          estado_id: '24',
          cidade: 'Arroio Trinta'
        },
        {
          estado_id: '24',
          cidade: 'Arvoredo'
        },
        {
          estado_id: '24',
          cidade: 'Ascurra'
        },
        {
          estado_id: '24',
          cidade: 'Atalanta'
        },
        {
          estado_id: '24',
          cidade: 'Aurora'
        },
        {
          estado_id: '24',
          cidade: 'Balneário Arroio do Silva'
        },
        {
          estado_id: '24',
          cidade: 'Balneário Gaivota'
        },
        {
          estado_id: '24',
          cidade: 'Balneário Rincão'
        },
        {
          estado_id: '24',
          cidade: 'Bandeirante'
        },
        {
          estado_id: '24',
          cidade: 'Barra Bonita'
        },
        {
          estado_id: '24',
          cidade: 'Bela Vista do Toldo'
        },
        {
          estado_id: '24',
          cidade: 'Belmonte'
        },
        {
          estado_id: '24',
          cidade: 'Benedito Novo'
        },
        {
          estado_id: '24',
          cidade: 'Bocaina do Sul'
        },
        {
          estado_id: '24',
          cidade: 'Bom Jardim da Serra'
        },
        {
          estado_id: '24',
          cidade: 'Bom Jesus'
        },
        {
          estado_id: '24',
          cidade: 'Bom Jesus do Oeste'
        },
        {
          estado_id: '24',
          cidade: 'Bom Retiro'
        },
        {
          estado_id: '24',
          cidade: 'Braço do Norte'
        },
        {
          estado_id: '24',
          cidade: 'Braço do Trombudo'
        },
        {
          estado_id: '24',
          cidade: 'Brunópolis'
        },
        {
          estado_id: '24',
          cidade: 'Caçador'
        },
        {
          estado_id: '24',
          cidade: 'Caibi'
        },
        {
          estado_id: '24',
          cidade: 'Calmon'
        },
        {
          estado_id: '24',
          cidade: 'Camboriú'
        },
        {
          estado_id: '24',
          cidade: 'Campo Alegre'
        },
        {
          estado_id: '24',
          cidade: 'Campo Belo do Sul'
        },
        {
          estado_id: '24',
          cidade: 'Campo Erê'
        },
        {
          estado_id: '24',
          cidade: 'Campos Novos'
        },
        {
          estado_id: '24',
          cidade: 'Canelinha'
        },
        {
          estado_id: '24',
          cidade: 'Canoinhas'
        },
        {
          estado_id: '24',
          cidade: 'Capão Alto'
        },
        {
          estado_id: '24',
          cidade: 'Capinzal'
        },
        {
          estado_id: '24',
          cidade: 'Capivari de Baixo'
        },
        {
          estado_id: '24',
          cidade: 'Catanduvas'
        },
        {
          estado_id: '24',
          cidade: 'Caxambu do Sul'
        },
        {
          estado_id: '24',
          cidade: 'Celso Ramos'
        },
        {
          estado_id: '24',
          cidade: 'Cerro Negro'
        },
        {
          estado_id: '24',
          cidade: 'Chapadão do Lageado'
        },
        {
          estado_id: '24',
          cidade: 'Chapecó'
        },
        {
          estado_id: '24',
          cidade: 'Cocal do Sul'
        },
        {
          estado_id: '24',
          cidade: 'Concórdia'
        },
        {
          estado_id: '24',
          cidade: 'Cordilheira Alta'
        },
        {
          estado_id: '24',
          cidade: 'Coronel Freitas'
        },
        {
          estado_id: '24',
          cidade: 'Coronel Martins'
        },
        {
          estado_id: '24',
          cidade: 'Correia Pinto'
        },
        {
          estado_id: '24',
          cidade: 'Corupá'
        },
        {
          estado_id: '24',
          cidade: 'Cunha Porã'
        },
        {
          estado_id: '24',
          cidade: 'Cunhataí'
        },
        {
          estado_id: '24',
          cidade: 'Curitibanos'
        },
        {
          estado_id: '24',
          cidade: 'Descanso'
        },
        {
          estado_id: '24',
          cidade: 'Dionísio Cerqueira'
        },
        {
          estado_id: '24',
          cidade: 'Dona Emma'
        },
        {
          estado_id: '24',
          cidade: 'Doutor Pedrinho'
        },
        {
          estado_id: '24',
          cidade: 'Entre Rios'
        },
        {
          estado_id: '24',
          cidade: 'Ermo'
        },
        {
          estado_id: '24',
          cidade: 'Erval Velho'
        },
        {
          estado_id: '24',
          cidade: 'Faxinal dos Guedes'
        },
        {
          estado_id: '24',
          cidade: 'Flor do Sertão'
        },
        {
          estado_id: '24',
          cidade: 'Formosa do Sul'
        },
        {
          estado_id: '24',
          cidade: 'Fraiburgo'
        },
        {
          estado_id: '24',
          cidade: 'Frei Rogério'
        },
        {
          estado_id: '24',
          cidade: 'Galvão'
        },
        {
          estado_id: '24',
          cidade: 'Governador Celso Ramos'
        },
        {
          estado_id: '24',
          cidade: 'Grão Pará'
        },
        {
          estado_id: '24',
          cidade: 'Gravatal'
        },
        {
          estado_id: '24',
          cidade: 'Guaraciaba'
        },
        {
          estado_id: '24',
          cidade: 'Guarujá do Sul'
        },
        {
          estado_id: '24',
          cidade: 'Guatambú'
        },
        {
          estado_id: '24',
          cidade: 'Herval d Oeste'
        },
        {
          estado_id: '24',
          cidade: 'Ibiam'
        },
        {
          estado_id: '24',
          cidade: 'Ibicaré'
        },
        {
          estado_id: '24',
          cidade: 'Ibirama'
        },
        {
          estado_id: '24',
          cidade: 'Içara'
        },
        {
          estado_id: '24',
          cidade: 'Imaruí'
        },
        {
          estado_id: '24',
          cidade: 'Imbituba'
        },
        {
          estado_id: '24',
          cidade: 'Imbuia'
        },
        {
          estado_id: '24',
          cidade: 'Indaial'
        },
        {
          estado_id: '24',
          cidade: 'Iomerê'
        },
        {
          estado_id: '24',
          cidade: 'Ipira'
        },
        {
          estado_id: '24',
          cidade: 'Iporã do Oeste'
        },
        {
          estado_id: '24',
          cidade: 'Ipuaçu'
        },
        {
          estado_id: '24',
          cidade: 'Ipumirim'
        },
        {
          estado_id: '24',
          cidade: 'Iraceminha'
        },
        {
          estado_id: '24',
          cidade: 'Irani'
        },
        {
          estado_id: '24',
          cidade: 'Irati'
        },
        {
          estado_id: '24',
          cidade: 'Irineópolis'
        },
        {
          estado_id: '24',
          cidade: 'Itá'
        },
        {
          estado_id: '24',
          cidade: 'Itaiópolis'
        },
        {
          estado_id: '24',
          cidade: 'Itapema'
        },
        {
          estado_id: '24',
          cidade: 'Itapiranga'
        },
        {
          estado_id: '24',
          cidade: 'Itapoá'
        },
        {
          estado_id: '24',
          cidade: 'Ituporanga'
        },
        {
          estado_id: '24',
          cidade: 'Jaborá'
        },
        {
          estado_id: '24',
          cidade: 'Jacinto Machado'
        },
        {
          estado_id: '24',
          cidade: 'Jaguaruna'
        },
        {
          estado_id: '24',
          cidade: 'Jardinópolis'
        },
        {
          estado_id: '24',
          cidade: 'Joaçaba'
        },
        {
          estado_id: '24',
          cidade: 'José Boiteux'
        },
        {
          estado_id: '24',
          cidade: 'Jupiá'
        },
        {
          estado_id: '24',
          cidade: 'Lacerdópolis'
        },
        {
          estado_id: '24',
          cidade: 'Lages'
        },
        {
          estado_id: '24',
          cidade: 'Laguna'
        },
        {
          estado_id: '24',
          cidade: 'Lajeado Grande'
        },
        {
          estado_id: '24',
          cidade: 'Laurentino'
        },
        {
          estado_id: '24',
          cidade: 'Lauro Muller'
        },
        {
          estado_id: '24',
          cidade: 'Lebon Régis'
        },
        {
          estado_id: '24',
          cidade: 'Leoberto Leal'
        },
        {
          estado_id: '24',
          cidade: 'Lindóia do Sul'
        },
        {
          estado_id: '24',
          cidade: 'Lontras'
        },
        {
          estado_id: '24',
          cidade: 'Luiz Alves'
        },
        {
          estado_id: '24',
          cidade: 'Luzerna'
        },
        {
          estado_id: '24',
          cidade: 'Macieira'
        },
        {
          estado_id: '24',
          cidade: 'Mafra'
        },
        {
          estado_id: '24',
          cidade: 'Major Gercino'
        },
        {
          estado_id: '24',
          cidade: 'Major Vieira'
        },
        {
          estado_id: '24',
          cidade: 'Maravilha'
        },
        {
          estado_id: '24',
          cidade: 'Marema'
        },
        {
          estado_id: '24',
          cidade: 'Matos Costa'
        },
        {
          estado_id: '24',
          cidade: 'Meleiro'
        },
        {
          estado_id: '24',
          cidade: 'Mirim Doce'
        },
        {
          estado_id: '24',
          cidade: 'Modelo'
        },
        {
          estado_id: '24',
          cidade: 'Mondaí'
        },
        {
          estado_id: '24',
          cidade: 'Monte Carlo'
        },
        {
          estado_id: '24',
          cidade: 'Monte Castelo'
        },
        {
          estado_id: '24',
          cidade: 'Morro da Fumaça'
        },
        {
          estado_id: '24',
          cidade: 'Morro Grande'
        },
        {
          estado_id: '24',
          cidade: 'Nova Erechim'
        },
        {
          estado_id: '24',
          cidade: 'Nova Itaberaba'
        },
        {
          estado_id: '24',
          cidade: 'Nova Trento'
        },
        {
          estado_id: '24',
          cidade: 'Nova Veneza'
        },
        {
          estado_id: '24',
          cidade: 'Novo Horizonte'
        },
        {
          estado_id: '24',
          cidade: 'Orleans'
        },
        {
          estado_id: '24',
          cidade: 'Otacílio Costa'
        },
        {
          estado_id: '24',
          cidade: 'Ouro'
        },
        {
          estado_id: '24',
          cidade: 'Ouro Verde'
        },
        {
          estado_id: '24',
          cidade: 'Paial'
        },
        {
          estado_id: '24',
          cidade: 'Painel'
        },
        {
          estado_id: '24',
          cidade: 'Palma Sola'
        },
        {
          estado_id: '24',
          cidade: 'Palmeira'
        },
        {
          estado_id: '24',
          cidade: 'Palmitos'
        },
        {
          estado_id: '24',
          cidade: 'Papanduva'
        },
        {
          estado_id: '24',
          cidade: 'Paraíso'
        },
        {
          estado_id: '24',
          cidade: 'Passo de Torres'
        },
        {
          estado_id: '24',
          cidade: 'Passos Maia'
        },
        {
          estado_id: '24',
          cidade: 'Paulo Lopes'
        },
        {
          estado_id: '24',
          cidade: 'Pedras Grandes'
        },
        {
          estado_id: '24',
          cidade: 'Peritiba'
        },
        {
          estado_id: '24',
          cidade: 'Pescaria Brava'
        },
        {
          estado_id: '24',
          cidade: 'Petrolândia'
        },
        {
          estado_id: '24',
          cidade: 'Pinhalzinho'
        },
        {
          estado_id: '24',
          cidade: 'Pinheiro Preto'
        },
        {
          estado_id: '24',
          cidade: 'Piratuba'
        },
        {
          estado_id: '24',
          cidade: 'Planalto Alegre'
        },
        {
          estado_id: '24',
          cidade: 'Ponte Alta'
        },
        {
          estado_id: '24',
          cidade: 'Ponte Alta do Norte'
        },
        {
          estado_id: '24',
          cidade: 'Ponte Serrada'
        },
        {
          estado_id: '24',
          cidade: 'Porto Belo'
        },
        {
          estado_id: '24',
          cidade: 'Porto União'
        },
        {
          estado_id: '24',
          cidade: 'Pouso Redondo'
        },
        {
          estado_id: '24',
          cidade: 'Praia Grande'
        },
        {
          estado_id: '24',
          cidade: 'Presidente Castello Branco'
        },
        {
          estado_id: '24',
          cidade: 'Presidente Getúlio'
        },
        {
          estado_id: '24',
          cidade: 'Presidente Nereu'
        },
        {
          estado_id: '24',
          cidade: 'Princesa'
        },
        {
          estado_id: '24',
          cidade: 'Quilombo'
        },
        {
          estado_id: '24',
          cidade: 'Rancho Queimado'
        },
        {
          estado_id: '24',
          cidade: 'Rio das Antas'
        },
        {
          estado_id: '24',
          cidade: 'Rio do Campo'
        },
        {
          estado_id: '24',
          cidade: 'Rio do Oeste'
        },
        {
          estado_id: '24',
          cidade: 'Rio do Sul'
        },
        {
          estado_id: '24',
          cidade: 'Rio dos Cedros'
        },
        {
          estado_id: '24',
          cidade: 'Rio Fortuna'
        },
        {
          estado_id: '24',
          cidade: 'Rio Negrinho'
        },
        {
          estado_id: '24',
          cidade: 'Rio Rufino'
        },
        {
          estado_id: '24',
          cidade: 'Riqueza'
        },
        {
          estado_id: '24',
          cidade: 'Rodeio'
        },
        {
          estado_id: '24',
          cidade: 'Romelândia'
        },
        {
          estado_id: '24',
          cidade: 'Salete'
        },
        {
          estado_id: '24',
          cidade: 'Saltinho'
        },
        {
          estado_id: '24',
          cidade: 'Salto Veloso'
        },
        {
          estado_id: '24',
          cidade: 'Sangão'
        },
        {
          estado_id: '24',
          cidade: 'Santa Cecília'
        },
        {
          estado_id: '24',
          cidade: 'Santa Helena'
        },
        {
          estado_id: '24',
          cidade: 'Santa Rosa de Lima'
        },
        {
          estado_id: '24',
          cidade: 'Santa Rosa do Sul'
        },
        {
          estado_id: '24',
          cidade: 'Santa Terezinha'
        },
        {
          estado_id: '24',
          cidade: 'Santa Terezinha do Progresso'
        },
        {
          estado_id: '24',
          cidade: 'Santiago do Sul'
        },
        {
          estado_id: '24',
          cidade: 'Santo Amaro da Imperatriz'
        },
        {
          estado_id: '24',
          cidade: 'São Bento do Sul'
        },
        {
          estado_id: '24',
          cidade: 'São Bernardino'
        },
        {
          estado_id: '24',
          cidade: 'São Bonifácio'
        },
        {
          estado_id: '24',
          cidade: 'São Carlos'
        },
        {
          estado_id: '24',
          cidade: 'São Cristovão do Sul'
        },
        {
          estado_id: '24',
          cidade: 'São Domingos'
        },
        {
          estado_id: '24',
          cidade: 'São João Batista'
        },
        {
          estado_id: '24',
          cidade: 'São João do Oeste'
        },
        {
          estado_id: '24',
          cidade: 'São João do Sul'
        },
        {
          estado_id: '24',
          cidade: 'São Joaquim'
        },
        {
          estado_id: '24',
          cidade: 'São José do Cedro'
        },
        {
          estado_id: '24',
          cidade: 'São José do Cerrito'
        },
        {
          estado_id: '24',
          cidade: 'São Lourenço do Oeste'
        },
        {
          estado_id: '24',
          cidade: 'São Ludgero'
        },
        {
          estado_id: '24',
          cidade: 'São Martinho'
        },
        {
          estado_id: '24',
          cidade: 'São Miguel da Boa Vista'
        },
        {
          estado_id: '24',
          cidade: 'São Miguel do Oeste'
        },
        {
          estado_id: '24',
          cidade: 'Saudades'
        },
        {
          estado_id: '24',
          cidade: 'Schroeder'
        },
        {
          estado_id: '24',
          cidade: 'Seara'
        },
        {
          estado_id: '24',
          cidade: 'Serra Alta'
        },
        {
          estado_id: '24',
          cidade: 'Siderópolis'
        },
        {
          estado_id: '24',
          cidade: 'Sombrio'
        },
        {
          estado_id: '24',
          cidade: 'Sul Brasil'
        },
        {
          estado_id: '24',
          cidade: 'Taió'
        },
        {
          estado_id: '24',
          cidade: 'Tangará'
        },
        {
          estado_id: '24',
          cidade: 'Tigrinhos'
        },
        {
          estado_id: '24',
          cidade: 'Tijucas'
        },
        {
          estado_id: '24',
          cidade: 'Timbé do Sul'
        },
        {
          estado_id: '24',
          cidade: 'Timbó'
        },
        {
          estado_id: '24',
          cidade: 'Timbó Grande'
        },
        {
          estado_id: '24',
          cidade: 'Três Barras'
        },
        {
          estado_id: '24',
          cidade: 'Treviso'
        },
        {
          estado_id: '24',
          cidade: 'Treze de Maio'
        },
        {
          estado_id: '24',
          cidade: 'Treze Tílias'
        },
        {
          estado_id: '24',
          cidade: 'Trombudo Central'
        },
        {
          estado_id: '24',
          cidade: 'Tubarão'
        },
        {
          estado_id: '24',
          cidade: 'Tunápolis'
        },
        {
          estado_id: '24',
          cidade: 'Turvo'
        },
        {
          estado_id: '24',
          cidade: 'União do Oeste'
        },
        {
          estado_id: '24',
          cidade: 'Urubici'
        },
        {
          estado_id: '24',
          cidade: 'Urupema'
        },
        {
          estado_id: '24',
          cidade: 'Urussanga'
        },
        {
          estado_id: '24',
          cidade: 'Vargeão'
        },
        {
          estado_id: '24',
          cidade: 'Vargem'
        },
        {
          estado_id: '24',
          cidade: 'Vargem Bonita'
        },
        {
          estado_id: '24',
          cidade: 'Vidal Ramos'
        },
        {
          estado_id: '24',
          cidade: 'Videira'
        },
        {
          estado_id: '24',
          cidade: 'Vitor Meireles'
        },
        {
          estado_id: '24',
          cidade: 'Witmarsum'
        },
        {
          estado_id: '24',
          cidade: 'Xanxerê'
        },
        {
          estado_id: '24',
          cidade: 'Xavantina'
        },
        {
          estado_id: '24',
          cidade: 'Xaxim'
        },
        {
          estado_id: '24',
          cidade: 'Zortéa'
        },
        {
          estado_id: '24',
          cidade: 'Ilhota'
        },
        {
          estado_id: '24',
          cidade: 'Balneário Barra do Sul'
        },
        {
          estado_id: '24',
          cidade: 'Araranguá'
        },
        {
          estado_id: '24',
          cidade: 'Navegantes'
        },
        {
          estado_id: '24',
          cidade: 'Penha'
        },
        {
          estado_id: '24',
          cidade: 'Maracajá'
        },
        {
          estado_id: '24',
          cidade: 'São João do Itaperiú'
        },
        {
          estado_id: '24',
          cidade: 'Biguaçu'
        },
        {
          estado_id: '24',
          cidade: 'São Francisco do Sul'
        },
        {
          estado_id: '24',
          cidade: 'Araquari'
        },
        {
          estado_id: '24',
          cidade: 'Brusque'
        },
        {
          estado_id: '24',
          cidade: 'Forquilhinha'
        },
        {
          estado_id: '24',
          cidade: 'Balneário Piçarras'
        },
        {
          estado_id: '24',
          cidade: 'Guaramirim'
        },
        {
          estado_id: '24',
          cidade: 'Palhoça'
        },
        {
          estado_id: '24',
          cidade: 'Jaraguá do Sul'
        },
        {
          estado_id: '24',
          cidade: 'Joinville'
        },
        {
          estado_id: '24',
          cidade: 'Criciúma'
        },
        {
          estado_id: '24',
          cidade: 'Florianópolis'
        },
        {
          estado_id: '24',
          cidade: 'São José'
        },
        {
          estado_id: '24',
          cidade: 'Barra Velha'
        },
        {
          estado_id: '25',
          cidade: 'Macambira'
        },
        {
          estado_id: '25',
          cidade: 'Frei Paulo'
        },
        {
          estado_id: '25',
          cidade: 'Campo do Brito'
        },
        {
          estado_id: '25',
          cidade: 'São Domingos'
        },
        {
          estado_id: '25',
          cidade: 'Rosário do Catete'
        },
        {
          estado_id: '25',
          cidade: 'Amparo de São Francisco'
        },
        {
          estado_id: '25',
          cidade: 'Aquidabã'
        },
        {
          estado_id: '25',
          cidade: 'Arauá'
        },
        {
          estado_id: '25',
          cidade: 'Areia Branca'
        },
        {
          estado_id: '25',
          cidade: 'Boquim'
        },
        {
          estado_id: '25',
          cidade: 'Brejo Grande'
        },
        {
          estado_id: '25',
          cidade: 'Canhoba'
        },
        {
          estado_id: '25',
          cidade: 'Canindé de São Francisco'
        },
        {
          estado_id: '25',
          cidade: 'Capela'
        },
        {
          estado_id: '25',
          cidade: 'Carira'
        },
        {
          estado_id: '25',
          cidade: 'Carmópolis'
        },
        {
          estado_id: '25',
          cidade: 'Cedro de São João'
        },
        {
          estado_id: '25',
          cidade: 'Cristinápolis'
        },
        {
          estado_id: '25',
          cidade: 'Cumbe'
        },
        {
          estado_id: '25',
          cidade: 'Estância'
        },
        {
          estado_id: '25',
          cidade: 'Feira Nova'
        },
        {
          estado_id: '25',
          cidade: 'Gararu'
        },
        {
          estado_id: '25',
          cidade: 'General Maynard'
        }, {
          estado_id: '25',
          cidade: 'Gracho Cardoso'
        },
        {
          estado_id: '25',
          cidade: 'Ilha das Flores'
        },
        {
          estado_id: '25',
          cidade: 'Indiaroba'
        },
        {
          estado_id: '25',
          cidade: 'Itabaianinha'
        },
        {
          estado_id: '25',
          cidade: 'Itabi'
        },
        {
          estado_id: '25',
          cidade: 'Itaporanga d Ajuda'
        },
        {
          estado_id: '25',
          cidade: 'Japaratuba'
        },
        {
          estado_id: '25',
          cidade: 'Japoatã'
        },
        {
          estado_id: '25',
          cidade: 'Lagarto'
        },
        {
          estado_id: '25',
          cidade: 'Malhada dos Bois'
        },
        {
          estado_id: '25',
          cidade: 'Malhador'
        },
        {
          estado_id: '25',
          cidade: 'Monte Alegre de Sergipe'
        },
        {
          estado_id: '25',
          cidade: 'Muribeca'
        },
        {
          estado_id: '25',
          cidade: 'Neópolis'
        },
        {
          estado_id: '25',
          cidade: 'Nossa Senhora Aparecida'
        },
        {
          estado_id: '25',
          cidade: 'Nossa Senhora da Glória'
        },
        {
          estado_id: '25',
          cidade: 'Nossa Senhora das Dores'
        },
        {
          estado_id: '25',
          cidade: 'Nossa Senhora de Lourdes'
        },
        {
          estado_id: '25',
          cidade: 'Pacatuba'
        },
        {
          estado_id: '25',
          cidade: 'Pedra Mole'
        },
        {
          estado_id: '25',
          cidade: 'Pedrinhas'
        },
        {
          estado_id: '25',
          cidade: 'Pinhão'
        },
        {
          estado_id: '25',
          cidade: 'Pirambu'
        },
        {
          estado_id: '25',
          cidade: 'Poço Redondo'
        },
        {
          estado_id: '25',
          cidade: 'Poço Verde'
        },
        {
          estado_id: '25',
          cidade: 'Porto da Folha'
        },
        {
          estado_id: '25',
          cidade: 'Propriá'
        },
        {
          estado_id: '25',
          cidade: 'Riachão do Dantas'
        },
        {
          estado_id: '25',
          cidade: 'Riachuelo'
        },
        {
          estado_id: '25',
          cidade: 'Ribeirópolis'
        },
        {
          estado_id: '25',
          cidade: 'Salgado'
        },
        {
          estado_id: '25',
          cidade: 'Santa Luzia do Itanhy'
        },
        {
          estado_id: '25',
          cidade: 'Santa Rosa de Lima'
        },
        {
          estado_id: '25',
          cidade: 'Santana do São Francisco'
        },
        {
          estado_id: '25',
          cidade: 'São Cristóvão'
        },
        {
          estado_id: '25',
          cidade: 'São Francisco'
        },
        {
          estado_id: '25',
          cidade: 'São Miguel do Aleixo'
        },
        {
          estado_id: '25',
          cidade: 'Simão Dias'
        },
        {
          estado_id: '25',
          cidade: 'Siriri'
        },
        {
          estado_id: '25',
          cidade: 'Telha'
        },
        {
          estado_id: '25',
          cidade: 'Tobias Barreto'
        },
        {
          estado_id: '25',
          cidade: 'Tomar do Geru'
        },
        {
          estado_id: '25',
          cidade: 'Umbaúba'
        },
        {
          estado_id: '25',
          cidade: 'Moita Bonita'
        },
        {
          estado_id: '25',
          cidade: 'Maruim'
        },
        {
          estado_id: '25',
          cidade: 'Itabaiana'
        },
        {
          estado_id: '25',
          cidade: 'Divina Pastora'
        },
        {
          estado_id: '25',
          cidade: 'Nossa Senhora do Socorro'
        },
        {
          estado_id: '25',
          cidade: 'Laranjeiras'
        },
        {
          estado_id: '25',
          cidade: 'Santo Amaro das Brotas'
        },
        {
          estado_id: '25',
          cidade: 'Barra dos Coqueiros'
        },
        {
          estado_id: '25',
          cidade: 'Aracaju'
        },
        {
          estado_id: '26',
          cidade: 'São Lourenço da Serra'
        },
        {
          estado_id: '26',
          cidade: 'Onda Verde'
        },
        {
          estado_id: '26',
          cidade: 'Mariápolis'
        },
        {
          estado_id: '26',
          cidade: 'Cravinhos'
        },
        {
          estado_id: '26',
          cidade: 'Praia Grande'
        },
        {
          estado_id: '26',
          cidade: 'Rubiácea'
        },
        {
          estado_id: '26',
          cidade: 'Irapuru'
        },
        {
          estado_id: '26',
          cidade: 'Pompéia'
        },
        {
          estado_id: '26',
          cidade: 'Ribeirão Bonito'
        },
        {
          estado_id: '26',
          cidade: 'Flora Rica'
        },
        {
          estado_id: '26',
          cidade: 'Nova Europa'
        },
        {
          estado_id: '26',
          cidade: 'Bernardino de Campos'
        },
        {
          estado_id: '26',
          cidade: 'Vera Cruz'
        },
        {
          estado_id: '26',
          cidade: 'Alfredo Marcondes'
        },
        {
          estado_id: '26',
          cidade: 'Elisiário'
        },
        {
          estado_id: '26',
          cidade: 'Adamantina'
        },
        {
          estado_id: '26',
          cidade: 'Cristais Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Patrocínio Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Rafard'
        }, {
          estado_id: '26',
          cidade: 'Engenheiro Coelho'
        },
        {
          estado_id: '26',
          cidade: 'Ribeirão dos Índios'
        },
        {
          estado_id: '26',
          cidade: 'Bálsamo'
        },
        {
          estado_id: '26',
          cidade: 'Floreal'
        },
        {
          estado_id: '26',
          cidade: 'Gavião Peixoto'
        },
        {
          estado_id: '26',
          cidade: 'Glicério'
        },
        {
          estado_id: '26',
          cidade: 'Tuiuti'
        },
        {
          estado_id: '26',
          cidade: 'Buritama'
        },
        {
          estado_id: '26',
          cidade: 'Emilianópolis'
        },
        {
          estado_id: '26',
          cidade: 'Jaguariúna'
        },
        {
          estado_id: '26',
          cidade: 'Macaubal'
        },
        {
          estado_id: '26',
          cidade: 'Monte Mor'
        },
        {
          estado_id: '26',
          cidade: 'Sagres'
        },
        {
          estado_id: '26',
          cidade: 'Cachoeira Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Capivari'
        },
        {
          estado_id: '26',
          cidade: 'Chavantes'
        },
        {
          estado_id: '26',
          cidade: 'Guatapará'
        },
        {
          estado_id: '26',
          cidade: 'Jaci'
        },
        {
          estado_id: '26',
          cidade: 'Quintana'
        },
        {
          estado_id: '26',
          cidade: 'Elias Fausto'
        },
        {
          estado_id: '26',
          cidade: 'Garça'
        },
        {
          estado_id: '26',
          cidade: 'Iacri'
        },
        {
          estado_id: '26',
          cidade: 'Mirante do Paranapanema'
        },
        {
          estado_id: '26',
          cidade: 'Nova Aliança'
        },
        {
          estado_id: '26',
          cidade: 'Planalto'
        },
        {
          estado_id: '26',
          cidade: 'Bom Jesus dos Perdões'
        },
        {
          estado_id: '26',
          cidade: 'Cândido Rodrigues'
        },
        {
          estado_id: '26',
          cidade: 'Cerquilho'
        },
        {
          estado_id: '26',
          cidade: 'Charqueada'
        },
        {
          estado_id: '26',
          cidade: 'Estrela do Norte'
        },
        {
          estado_id: '26',
          cidade: 'Gastão Vidigal'
        },
        {
          estado_id: '26',
          cidade: 'Iacanga'
        },
        {
          estado_id: '26',
          cidade: 'Ipuã'
        },
        {
          estado_id: '26',
          cidade: 'Ribeirão Corrente'
        },
        {
          estado_id: '26',
          cidade: 'Agudos'
        },
        {
          estado_id: '26',
          cidade: 'Anhumas'
        },
        {
          estado_id: '26',
          cidade: 'Cajobi'
        },
        {
          estado_id: '26',
          cidade: 'Guarantã'
        },
        {
          estado_id: '26',
          cidade: 'Holambra'
        },
        {
          estado_id: '26',
          cidade: 'Jarinu'
        },
        {
          estado_id: '26',
          cidade: 'João Ramalho'
        },
        {
          estado_id: '26',
          cidade: 'Monte Alto'
        },
        {
          estado_id: '26',
          cidade: 'Sales'
        },
        {
          estado_id: '26',
          cidade: 'Santo Anastácio'
        },
        {
          estado_id: '26',
          cidade: 'Águas da Prata'
        },
        {
          estado_id: '26',
          cidade: 'Alambari'
        },
        {
          estado_id: '26',
          cidade: 'Arandu'
        },
        {
          estado_id: '26',
          cidade: 'Atibaia'
        },
        {
          estado_id: '26',
          cidade: 'Avaí'
        },
        {
          estado_id: '26',
          cidade: 'Cabrália Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Itobi'
        },
        {
          estado_id: '26',
          cidade: 'Neves Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Pracinha'
        },
        {
          estado_id: '26',
          cidade: 'São Pedro do Turvo'
        },
        {
          estado_id: '26',
          cidade: 'Adolfo'
        },
        {
          estado_id: '26',
          cidade: 'Aguaí'
        },
        {
          estado_id: '26',
          cidade: 'Águas de Lindóia'
        },
        {
          estado_id: '26',
          cidade: 'Águas de Santa Bárbara'
        },
        {
          estado_id: '26',
          cidade: 'Altair'
        },
        {
          estado_id: '26',
          cidade: 'Altinópolis'
        },
        {
          estado_id: '26',
          cidade: 'Alumínio'
        },
        {
          estado_id: '26',
          cidade: 'Álvares Florence'
        },
        {
          estado_id: '26',
          cidade: 'Alvinlândia'
        },
        {
          estado_id: '26',
          cidade: 'Américo de Campos'
        },
        {
          estado_id: '26',
          cidade: 'Analândia'
        },
        {
          estado_id: '26',
          cidade: 'Andradina'
        },
        {
          estado_id: '26',
          cidade: 'Angatuba'
        },
        {
          estado_id: '26',
          cidade: 'Anhembi'
        },
        {
          estado_id: '26',
          cidade: 'Aparecida d Oeste'
        },
        {
          estado_id: '26',
          cidade: 'Apiaí'
        },
        {
          estado_id: '26',
          cidade: 'Araçariguama'
        },
        {
          estado_id: '26',
          cidade: 'Arapeí'
        },
        {
          estado_id: '26',
          cidade: 'Araras'
        },
        {
          estado_id: '26',
          cidade: 'Arco-Íris'
        },
        {
          estado_id: '26',
          cidade: 'Arealva'
        },
        {
          estado_id: '26',
          cidade: 'Areiópolis'
        },
        {
          estado_id: '26',
          cidade: 'Ariranha'
        },
        {
          estado_id: '26',
          cidade: 'Aspásia'
        },
        {
          estado_id: '26',
          cidade: 'Assis'
        },
        {
          estado_id: '26',
          cidade: 'Auriflama'
        },
        {
          estado_id: '26',
          cidade: 'Avanhandava'
        },
        {
          estado_id: '26',
          cidade: 'Avaré'
        },
        {
          estado_id: '26',
          cidade: 'Balbinos'
        },
        {
          estado_id: '26',
          cidade: 'Bananal'
        },
        {
          estado_id: '26',
          cidade: 'Barão de Antonina'
        },
        {
          estado_id: '26',
          cidade: 'Barbosa'
        },
        {
          estado_id: '26',
          cidade: 'Bariri'
        },
        {
          estado_id: '26',
          cidade: 'Barra Bonita'
        },
        {
          estado_id: '26',
          cidade: 'Barra do Chapéu'
        },
        {
          estado_id: '26',
          cidade: 'Barra do Turvo'
        },
        {
          estado_id: '26',
          cidade: 'Barretos'
        },
        {
          estado_id: '26',
          cidade: 'Barrinha'
        },
        {
          estado_id: '26',
          cidade: 'Bastos'
        },
        {
          estado_id: '26',
          cidade: 'Batatais'
        },
        {
          estado_id: '26',
          cidade: 'Bebedouro'
        },
        {
          estado_id: '26',
          cidade: 'Biritiba-Mirim'
        },
        {
          estado_id: '26',
          cidade: 'Boa Esperança do Sul'
        },
        {
          estado_id: '26',
          cidade: 'Bofete'
        },
        {
          estado_id: '26',
          cidade: 'Bom Sucesso de Itararé'
        },
        {
          estado_id: '26',
          cidade: 'Borá'
        },
        {
          estado_id: '26',
          cidade: 'Boracéia'
        },
        {
          estado_id: '26',
          cidade: 'Borborema'
        },
        {
          estado_id: '26',
          cidade: 'Borebi'
        },
        {
          estado_id: '26',
          cidade: 'Botucatu'
        },
        {
          estado_id: '26',
          cidade: 'Bragança Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Braúna'
        },
        {
          estado_id: '26',
          cidade: 'Brodowski'
        },
        {
          estado_id: '26',
          cidade: 'Brotas'
        },
        {
          estado_id: '26',
          cidade: 'Buri'
        },
        {
          estado_id: '26',
          cidade: 'Buritizal'
        },
        {
          estado_id: '26',
          cidade: 'Cabreúva'
        },
        {
          estado_id: '26',
          cidade: 'Caconde'
        },
        {
          estado_id: '26',
          cidade: 'Cafelândia'
        },
        {
          estado_id: '26',
          cidade: 'Caiabu'
        },
        {
          estado_id: '26',
          cidade: 'Caiuá'
        },
        {
          estado_id: '26',
          cidade: 'Cajuru'
        },
        {
          estado_id: '26',
          cidade: 'Campina do Monte Alegre'
        },
        {
          estado_id: '26',
          cidade: 'Campos do Jordão'
        },
        {
          estado_id: '26',
          cidade: 'Campos Novos Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Cananéia'
        },
        {
          estado_id: '26',
          cidade: 'Cândido Mota'
        },
        {
          estado_id: '26',
          cidade: 'Capão Bonito'
        },
        {
          estado_id: '26',
          cidade: 'Capela do Alto'
        },
        {
          estado_id: '26',
          cidade: 'Caraguatatuba'
        },
        {
          estado_id: '26',
          cidade: 'Cardoso'
        },
        {
          estado_id: '26',
          cidade: 'Casa Branca'
        },
        {
          estado_id: '26',
          cidade: 'Cássia dos Coqueiros'
        },
        {
          estado_id: '26',
          cidade: 'Castilho'
        },
        {
          estado_id: '26',
          cidade: 'Catanduva'
        },
        {
          estado_id: '26',
          cidade: 'Catiguá'
        },
        {
          estado_id: '26',
          cidade: 'Cerqueira César'
        },
        {
          estado_id: '26',
          cidade: 'Cesário Lange'
        },
        {
          estado_id: '26',
          cidade: 'Clementina'
        },
        {
          estado_id: '26',
          cidade: 'Colina'
        },
        {
          estado_id: '26',
          cidade: 'Colômbia'
        },
        {
          estado_id: '26',
          cidade: 'Conchal'
        },
        {
          estado_id: '26',
          cidade: 'Conchas'
        },
        {
          estado_id: '26',
          cidade: 'Coronel Macedo'
        },
        {
          estado_id: '26',
          cidade: 'Cosmorama'
        },
        {
          estado_id: '26',
          cidade: 'Cruzália'
        },
        {
          estado_id: '26',
          cidade: 'Cunha'
        },
        {
          estado_id: '26',
          cidade: 'Descalvado'
        },
        {
          estado_id: '26',
          cidade: 'Dirce Reis'
        },
        {
          estado_id: '26',
          cidade: 'Divinolândia'
        },
        {
          estado_id: '26',
          cidade: 'Dobrada'
        },
        {
          estado_id: '26',
          cidade: 'Dois Córregos'
        },
        {
          estado_id: '26',
          cidade: 'Dolcinópolis'
        },
        {
          estado_id: '26',
          cidade: 'Dracena'
        },
        {
          estado_id: '26',
          cidade: 'Duartina'
        },
        {
          estado_id: '26',
          cidade: 'Eldorado'
        },
        {
          estado_id: '26',
          cidade: 'Embaúba'
        },
        {
          estado_id: '26',
          cidade: 'Espírito Santo do Pinhal'
        },
        {
          estado_id: '26',
          cidade: 'Espírito Santo do Turvo'
        },
        {
          estado_id: '26',
          cidade: 'Estiva Gerbi'
        },
        {
          estado_id: '26',
          cidade: 'Estrela d Oeste'
        },
        {
          estado_id: '26',
          cidade: 'Euclides da Cunha Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Fartura'
        },
        {
          estado_id: '26',
          cidade: 'Fernando Prestes'
        },
        {
          estado_id: '26',
          cidade: 'Fernandópolis'
        },
        {
          estado_id: '26',
          cidade: 'Fernão'
        },
        {
          estado_id: '26',
          cidade: 'Flórida Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Florínia'
        },
        {
          estado_id: '26',
          cidade: 'Gabriel Monteiro'
        },
        {
          estado_id: '26',
          cidade: 'Gália'
        },
        {
          estado_id: '26',
          cidade: 'General Salgado'
        },
        {
          estado_id: '26',
          cidade: 'Getulina'
        },
        {
          estado_id: '26',
          cidade: 'Guaiçara'
        },
        {
          estado_id: '26',
          cidade: 'Guaíra'
        },
        {
          estado_id: '26',
          cidade: 'Guapiaçu'
        },
        {
          estado_id: '26',
          cidade: 'Guapiara'
        },
        {
          estado_id: '26',
          cidade: 'Guaraçaí'
        },
        {
          estado_id: '26',
          cidade: 'Guaraci'
        },
        {
          estado_id: '26',
          cidade: 'Guarani d Oeste'
        },
        {
          estado_id: '26',
          cidade: 'Guararema'
        },
        {
          estado_id: '26',
          cidade: 'Guareí'
        },
        {
          estado_id: '26',
          cidade: 'Guariba'
        },
        {
          estado_id: '26',
          cidade: 'Guzolândia'
        },
        {
          estado_id: '26',
          cidade: 'Herculândia'
        },
        {
          estado_id: '26',
          cidade: 'Iaras'
        },
        {
          estado_id: '26',
          cidade: 'Ibirá'
        },
        {
          estado_id: '26',
          cidade: 'Ibitinga'
        },
        {
          estado_id: '26',
          cidade: 'Ibiúna'
        },
        {
          estado_id: '26',
          cidade: 'Icém'
        },
        {
          estado_id: '26',
          cidade: 'Iepê'
        },
        {
          estado_id: '26',
          cidade: 'Igaraçu do Tietê'
        },
        {
          estado_id: '26',
          cidade: 'Igarapava'
        },
        {
          estado_id: '26',
          cidade: 'Igaratá'
        },
        {
          estado_id: '26',
          cidade: 'Iguape'
        },
        {
          estado_id: '26',
          cidade: 'Ilha Comprida'
        },
        {
          estado_id: '26',
          cidade: 'Ilha Solteira'
        },
        {
          estado_id: '26',
          cidade: 'Ilhabela'
        },
        {
          estado_id: '26',
          cidade: 'Indiaporã'
        },
        {
          estado_id: '26',
          cidade: 'Inúbia Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Ipaussu'
        },
        {
          estado_id: '26',
          cidade: 'Iperó'
        },
        {
          estado_id: '26',
          cidade: 'Iporanga'
        },
        {
          estado_id: '26',
          cidade: 'Irapuã'
        },
        {
          estado_id: '26',
          cidade: 'Itaberá'
        },
        {
          estado_id: '26',
          cidade: 'Itaí'
        },
        {
          estado_id: '26',
          cidade: 'Itajobi'
        },
        {
          estado_id: '26',
          cidade: 'Itaju'
        },
        {
          estado_id: '26',
          cidade: 'Itaóca'
        },
        {
          estado_id: '26',
          cidade: 'Itapeva'
        },
        {
          estado_id: '26',
          cidade: 'Itapira'
        },
        {
          estado_id: '26',
          cidade: 'Itapirapuã Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Itápolis'
        },
        {
          estado_id: '26',
          cidade: 'Itaporanga'
        },
        {
          estado_id: '26',
          cidade: 'Itapuí'
        },
        {
          estado_id: '26',
          cidade: 'Itapura'
        },
        {
          estado_id: '26',
          cidade: 'Itararé'
        },
        {
          estado_id: '26',
          cidade: 'Itariri'
        },
        {
          estado_id: '26',
          cidade: 'Itatiba'
        },
        {
          estado_id: '26',
          cidade: 'Itatinga'
        },
        {
          estado_id: '26',
          cidade: 'Itirapina'
        },
        {
          estado_id: '26',
          cidade: 'Ituverava'
        },
        {
          estado_id: '26',
          cidade: 'Jaborandi'
        },
        {
          estado_id: '26',
          cidade: 'Jaboticabal'
        },
        {
          estado_id: '26',
          cidade: 'Jales'
        },
        {
          estado_id: '26',
          cidade: 'Jambeiro'
        },
        {
          estado_id: '26',
          cidade: 'Jaú'
        },
        {
          estado_id: '26',
          cidade: 'Jeriquara'
        },
        {
          estado_id: '26',
          cidade: 'Joanópolis'
        },
        {
          estado_id: '26',
          cidade: 'José Bonifácio'
        },
        {
          estado_id: '26',
          cidade: 'Júlio Mesquita'
        },
        {
          estado_id: '26',
          cidade: 'Jumirim'
        },
        {
          estado_id: '26',
          cidade: 'Junqueirópolis'
        },
        {
          estado_id: '26',
          cidade: 'Juquitiba'
        },
        {
          estado_id: '26',
          cidade: 'Lagoinha'
        },
        {
          estado_id: '26',
          cidade: 'Laranjal Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Lavínia'
        },
        {
          estado_id: '26',
          cidade: 'Lavrinhas'
        },
        {
          estado_id: '26',
          cidade: 'Lençóis Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Limeira'
        },
        {
          estado_id: '26',
          cidade: 'Lindóia'
        },
        {
          estado_id: '26',
          cidade: 'Lins'
        },
        {
          estado_id: '26',
          cidade: 'Lucélia'
        },
        {
          estado_id: '26',
          cidade: 'Lucianópolis'
        },
        {
          estado_id: '26',
          cidade: 'Luiziânia'
        },
        {
          estado_id: '26',
          cidade: 'Lutécia'
        },
        {
          estado_id: '26',
          cidade: 'Macatuba'
        },
        {
          estado_id: '26',
          cidade: 'Macedônia'
        },
        {
          estado_id: '26',
          cidade: 'Mairinque'
        },
        {
          estado_id: '26',
          cidade: 'Mairiporã'
        },
        {
          estado_id: '26',
          cidade: 'Marabá Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Maracaí'
        },
        {
          estado_id: '26',
          cidade: 'Marapoama'
        },
        {
          estado_id: '26',
          cidade: 'Marinópolis'
        },
        {
          estado_id: '26',
          cidade: 'Matão'
        },
        {
          estado_id: '26',
          cidade: 'Meridiano'
        },
        {
          estado_id: '26',
          cidade: 'Mesópolis'
        },
        {
          estado_id: '26',
          cidade: 'Miguelópolis'
        },
        {
          estado_id: '26',
          cidade: 'Mineiros do Tietê'
        },
        {
          estado_id: '26',
          cidade: 'Mira Estrela'
        },
        {
          estado_id: '26',
          cidade: 'Miracatu'
        },
        {
          estado_id: '26',
          cidade: 'Mirandópolis'
        },
        {
          estado_id: '26',
          cidade: 'Mirassol'
        },
        {
          estado_id: '26',
          cidade: 'Mococa'
        },
        {
          estado_id: '26',
          cidade: 'Mombuca'
        },
        {
          estado_id: '26',
          cidade: 'Monções'
        },
        {
          estado_id: '26',
          cidade: 'Mongaguá'
        },
        {
          estado_id: '26',
          cidade: 'Monte Alegre do Sul'
        },
        {
          estado_id: '26',
          cidade: 'Monte Aprazível'
        },
        {
          estado_id: '26',
          cidade: 'Monte Azul Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Monte Castelo'
        },
        {
          estado_id: '26',
          cidade: 'Monteiro Lobato'
        },
        {
          estado_id: '26',
          cidade: 'Morro Agudo'
        },
        {
          estado_id: '26',
          cidade: 'Morungaba'
        },
        {
          estado_id: '26',
          cidade: 'Murutinga do Sul'
        },
        {
          estado_id: '26',
          cidade: 'Nantes'
        },
        {
          estado_id: '26',
          cidade: 'Narandiba'
        },
        {
          estado_id: '26',
          cidade: 'Natividade da Serra'
        },
        {
          estado_id: '26',
          cidade: 'Nazaré Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Nhandeara'
        },
        {
          estado_id: '26',
          cidade: 'Nipoã'
        },
        {
          estado_id: '26',
          cidade: 'Nova Campina'
        },
        {
          estado_id: '26',
          cidade: 'Nova Canaã Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Nova Castilho'
        },
        {
          estado_id: '26',
          cidade: 'Nova Granada'
        },
        {
          estado_id: '26',
          cidade: 'Nova Guataporanga'
        },
        {
          estado_id: '26',
          cidade: 'Nova Independência'
        },
        {
          estado_id: '26',
          cidade: 'Nova Luzitânia'
        },
        {
          estado_id: '26',
          cidade: 'Novais'
        },
        {
          estado_id: '26',
          cidade: 'Novo Horizonte'
        },
        {
          estado_id: '26',
          cidade: 'Ocauçu'
        },
        {
          estado_id: '26',
          cidade: 'Óleo'
        },
        {
          estado_id: '26',
          cidade: 'Olímpia'
        },
        {
          estado_id: '26',
          cidade: 'Oriente'
        },
        {
          estado_id: '26',
          cidade: 'Orindiúva'
        },
        {
          estado_id: '26',
          cidade: 'Orlândia'
        },
        {
          estado_id: '26',
          cidade: 'Osvaldo Cruz'
        },
        {
          estado_id: '26',
          cidade: 'Ouro Verde'
        },
        {
          estado_id: '26',
          cidade: 'Ouroeste'
        },
        {
          estado_id: '26',
          cidade: 'Pacaembu'
        },
        {
          estado_id: '26',
          cidade: 'Palestina'
        },
        {
          estado_id: '26',
          cidade: 'Palmares Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Palmeira d Oeste'
        },
        {
          estado_id: '26',
          cidade: 'Palmital'
        },
        {
          estado_id: '26',
          cidade: 'Panorama'
        },
        {
          estado_id: '26',
          cidade: 'Paraguaçu Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Paraibuna'
        },
        {
          estado_id: '26',
          cidade: 'Paraíso'
        },
        {
          estado_id: '26',
          cidade: 'Paranapanema'
        },
        {
          estado_id: '26',
          cidade: 'Paranapuã'
        },
        {
          estado_id: '26',
          cidade: 'Parapuã'
        },
        {
          estado_id: '26',
          cidade: 'Pardinho'
        },
        {
          estado_id: '26',
          cidade: 'Pariquera-Açu'
        },
        {
          estado_id: '26',
          cidade: 'Parisi'
        },
        {
          estado_id: '26',
          cidade: 'Paulicéia'
        },
        {
          estado_id: '26',
          cidade: 'Paulistânia'
        },
        {
          estado_id: '26',
          cidade: 'Paulo de Faria'
        },
        {
          estado_id: '26',
          cidade: 'Pederneiras'
        },
        {
          estado_id: '26',
          cidade: 'Pedra Bela'
        },
        {
          estado_id: '26',
          cidade: 'Pedranópolis'
        },
        {
          estado_id: '26',
          cidade: 'Pedregulho'
        },
        {
          estado_id: '26',
          cidade: 'Pedreira'
        },
        {
          estado_id: '26',
          cidade: 'Pedrinhas Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Pedro de Toledo'
        },
        {
          estado_id: '26',
          cidade: 'Penápolis'
        },
        {
          estado_id: '26',
          cidade: 'Pereira Barreto'
        },
        {
          estado_id: '26',
          cidade: 'Pereiras'
        },
        {
          estado_id: '26',
          cidade: 'Peruíbe'
        },
        {
          estado_id: '26',
          cidade: 'Piacatu'
        },
        {
          estado_id: '26',
          cidade: 'Piedade'
        },
        {
          estado_id: '26',
          cidade: 'Pilar do Sul'
        },
        {
          estado_id: '26',
          cidade: 'Pindorama'
        },
        {
          estado_id: '26',
          cidade: 'Pinhalzinho'
        },
        {
          estado_id: '26',
          cidade: 'Piquete'
        },
        {
          estado_id: '26',
          cidade: 'Piracaia'
        },
        {
          estado_id: '26',
          cidade: 'Pirajuí'
        },
        {
          estado_id: '26',
          cidade: 'Pirangi'
        },
        {
          estado_id: '26',
          cidade: 'Pirapora do Bom Jesus'
        },
        {
          estado_id: '26',
          cidade: 'Pirassununga'
        },
        {
          estado_id: '26',
          cidade: 'Pitangueiras'
        },
        {
          estado_id: '26',
          cidade: 'Platina'
        },
        {
          estado_id: '26',
          cidade: 'Poloni'
        },
        {
          estado_id: '26',
          cidade: 'Pongaí'
        },
        {
          estado_id: '26',
          cidade: 'Pontal'
        },
        {
          estado_id: '26',
          cidade: 'Pontalinda'
        },
        {
          estado_id: '26',
          cidade: 'Pontes Gestal'
        },
        {
          estado_id: '26',
          cidade: 'Populina'
        },
        {
          estado_id: '26',
          cidade: 'Porangaba'
        },
        {
          estado_id: '26',
          cidade: 'Porto Feliz'
        },
        {
          estado_id: '26',
          cidade: 'Porto Ferreira'
        },
        {
          estado_id: '26',
          cidade: 'Pradópolis'
        },
        {
          estado_id: '26',
          cidade: 'Pratânia'
        },
        {
          estado_id: '26',
          cidade: 'Presidente Epitácio'
        },
        {
          estado_id: '26',
          cidade: 'Presidente Venceslau'
        },
        {
          estado_id: '26',
          cidade: 'Promissão'
        },
        {
          estado_id: '26',
          cidade: 'Quadra'
        },
        {
          estado_id: '26',
          cidade: 'Quatá'
        },
        {
          estado_id: '26',
          cidade: 'Queiroz'
        },
        {
          estado_id: '26',
          cidade: 'Queluz'
        },
        {
          estado_id: '26',
          cidade: 'Rancharia'
        },
        {
          estado_id: '26',
          cidade: 'Redenção da Serra'
        },
        {
          estado_id: '26',
          cidade: 'Reginópolis'
        },
        {
          estado_id: '26',
          cidade: 'Registro'
        },
        {
          estado_id: '26',
          cidade: 'Ribeira'
        },
        {
          estado_id: '26',
          cidade: 'Ribeirão Branco'
        },
        {
          estado_id: '26',
          cidade: 'Ribeirão Grande'
        },
        {
          estado_id: '26',
          cidade: 'Rifaina'
        },
        {
          estado_id: '26',
          cidade: 'Rincão'
        },
        {
          estado_id: '26',
          cidade: 'Rinópolis'
        },
        {
          estado_id: '26',
          cidade: 'Riolândia'
        },
        {
          estado_id: '26',
          cidade: 'Riversul'
        },
        {
          estado_id: '26',
          cidade: 'Rosana'
        },
        {
          estado_id: '26',
          cidade: 'Rubinéia'
        },
        {
          estado_id: '26',
          cidade: 'Sabino'
        },
        {
          estado_id: '26',
          cidade: 'Sales Oliveira'
        },
        {
          estado_id: '26',
          cidade: 'Salesópolis'
        },
        {
          estado_id: '26',
          cidade: 'Salmourão'
        },
        {
          estado_id: '26',
          cidade: 'Salto'
        },
        {
          estado_id: '26',
          cidade: 'Salto de Pirapora'
        },
        {
          estado_id: '26',
          cidade: 'Sandovalina'
        },
        {
          estado_id: '26',
          cidade: 'Santa Adélia'
        },
        {
          estado_id: '26',
          cidade: 'Santa Albertina'
        },
        {
          estado_id: '26',
          cidade: 'Santa Branca'
        },
        {
          estado_id: '26',
          cidade: 'Santa Clara d Oeste'
        },
        {
          estado_id: '26',
          cidade: 'Santa Cruz da Conceição'
        },
        {
          estado_id: '26',
          cidade: 'Santa Cruz da Esperança'
        },
        {
          estado_id: '26',
          cidade: 'Santa Cruz das Palmeiras'
        },
        {
          estado_id: '26',
          cidade: 'Santa Cruz do Rio Pardo'
        },
        {
          estado_id: '26',
          cidade: 'Santa Ernestina'
        },
        {
          estado_id: '26',
          cidade: 'Santa Fé do Sul'
        },
        {
          estado_id: '26',
          cidade: 'Santa Isabel'
        },
        {
          estado_id: '26',
          cidade: 'Santa Maria da Serra'
        },
        {
          estado_id: '26',
          cidade: 'Santa Mercedes'
        },
        {
          estado_id: '26',
          cidade: 'Santa Rita do Passa Quatro'
        },
        {
          estado_id: '26',
          cidade: 'Santa Rita d Oeste'
        },
        {
          estado_id: '26',
          cidade: 'Santa Rosa de Viterbo'
        },
        {
          estado_id: '26',
          cidade: 'Santa Salete'
        },
        {
          estado_id: '26',
          cidade: 'Santana da Ponte Pensa'
        },
        {
          estado_id: '26',
          cidade: 'Santo Antônio da Alegria'
        },
        {
          estado_id: '26',
          cidade: 'Santo Antônio de Posse'
        },
        {
          estado_id: '26',
          cidade: 'Santo Antônio do Jardim'
        },
        {
          estado_id: '26',
          cidade: 'Santo Antônio do Pinhal'
        },
        {
          estado_id: '26',
          cidade: 'Santo Expedito'
        },
        {
          estado_id: '26',
          cidade: 'Santópolis do Aguapeí'
        },
        {
          estado_id: '26',
          cidade: 'São Bento do Sapucaí'
        },
        {
          estado_id: '26',
          cidade: 'São Francisco'
        },
        {
          estado_id: '26',
          cidade: 'São João da Boa Vista'
        },
        {
          estado_id: '26',
          cidade: 'São João das Duas Pontes'
        },
        {
          estado_id: '26',
          cidade: 'São João de Iracema'
        },
        {
          estado_id: '26',
          cidade: 'São João do Pau d Alho'
        },
        {
          estado_id: '26',
          cidade: 'São José da Bela Vista'
        },
        {
          estado_id: '26',
          cidade: 'São José do Barreiro'
        },
        {
          estado_id: '26',
          cidade: 'São José do Rio Pardo'
        },
        {
          estado_id: '26',
          cidade: 'São Luiz do Paraitinga'
        },
        {
          estado_id: '26',
          cidade: 'São Manuel'
        },
        {
          estado_id: '26',
          cidade: 'São Miguel Arcanjo'
        },
        {
          estado_id: '26',
          cidade: 'São Pedro'
        },
        {
          estado_id: '26',
          cidade: 'São Sebastião'
        },
        {
          estado_id: '26',
          cidade: 'São Sebastião da Grama'
        },
        {
          estado_id: '26',
          cidade: 'São Simão'
        },
        {
          estado_id: '26',
          cidade: 'Sarapuí'
        },
        {
          estado_id: '26',
          cidade: 'Sarutaiá'
        },
        {
          estado_id: '26',
          cidade: 'Sebastianópolis do Sul'
        },
        {
          estado_id: '26',
          cidade: 'Serra Azul'
        },
        {
          estado_id: '26',
          cidade: 'Serra Negra'
        },
        {
          estado_id: '26',
          cidade: 'Serrana'
        },
        {
          estado_id: '26',
          cidade: 'Sertãozinho'
        },
        {
          estado_id: '26',
          cidade: 'Sete Barras'
        },
        {
          estado_id: '26',
          cidade: 'Severínia'
        },
        {
          estado_id: '26',
          cidade: 'Silveiras'
        },
        {
          estado_id: '26',
          cidade: 'Socorro'
        },
        {
          estado_id: '26',
          cidade: 'Sud Mennucci'
        },
        {
          estado_id: '26',
          cidade: 'Suzanápolis'
        },
        {
          estado_id: '26',
          cidade: 'Tabapuã'
        },
        {
          estado_id: '26',
          cidade: 'Tabatinga'
        },
        {
          estado_id: '26',
          cidade: 'Taciba'
        },
        {
          estado_id: '26',
          cidade: 'Taguaí'
        },
        {
          estado_id: '26',
          cidade: 'Taiaçu'
        },
        {
          estado_id: '26',
          cidade: 'Taiúva'
        },
        {
          estado_id: '26',
          cidade: 'Tambaú'
        },
        {
          estado_id: '26',
          cidade: 'Tanabi'
        },
        {
          estado_id: '26',
          cidade: 'Tapiraí'
        },
        {
          estado_id: '26',
          cidade: 'Tapiratiba'
        },
        {
          estado_id: '26',
          cidade: 'Taquaral'
        },
        {
          estado_id: '26',
          cidade: 'Taquaritinga'
        },
        {
          estado_id: '26',
          cidade: 'Taquarituba'
        },
        {
          estado_id: '26',
          cidade: 'Taquarivaí'
        },
        {
          estado_id: '26',
          cidade: 'Tarumã'
        },
        {
          estado_id: '26',
          cidade: 'Tatuí'
        },
        {
          estado_id: '26',
          cidade: 'Tejupá'
        },
        {
          estado_id: '26',
          cidade: 'Teodoro Sampaio'
        },
        {
          estado_id: '26',
          cidade: 'Terra Roxa'
        },
        {
          estado_id: '26',
          cidade: 'Tietê'
        },
        {
          estado_id: '26',
          cidade: 'Timburi'
        },
        {
          estado_id: '26',
          cidade: 'Torre de Pedra'
        },
        {
          estado_id: '26',
          cidade: 'Torrinha'
        },
        {
          estado_id: '26',
          cidade: 'Trabiju'
        },
        {
          estado_id: '26',
          cidade: 'Três Fronteiras'
        },
        {
          estado_id: '26',
          cidade: 'Tupã'
        },
        {
          estado_id: '26',
          cidade: 'Tupi Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Turmalina'
        },
        {
          estado_id: '26',
          cidade: 'Ubarana'
        },
        {
          estado_id: '26',
          cidade: 'Ubatuba'
        },
        {
          estado_id: '26',
          cidade: 'Ubirajara'
        },
        {
          estado_id: '26',
          cidade: 'Uchoa'
        },
        {
          estado_id: '26',
          cidade: 'União Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Urânia'
        },
        {
          estado_id: '26',
          cidade: 'Uru'
        },
        {
          estado_id: '26',
          cidade: 'Urupês'
        },
        {
          estado_id: '26',
          cidade: 'Valentim Gentil'
        },
        {
          estado_id: '26',
          cidade: 'Valparaíso'
        },
        {
          estado_id: '26',
          cidade: 'Vargem'
        },
        {
          estado_id: '26',
          cidade: 'Vargem Grande do Sul'
        },
        {
          estado_id: '26',
          cidade: 'Viradouro'
        },
        {
          estado_id: '26',
          cidade: 'Vista Alegre do Alto'
        },
        {
          estado_id: '26',
          cidade: 'Vitória Brasil'
        },
        {
          estado_id: '26',
          cidade: 'Votuporanga'
        },
        {
          estado_id: '26',
          cidade: 'Zacarias'
        },
        {
          estado_id: '26',
          cidade: 'Luís Antônio'
        },
        {
          estado_id: '26',
          cidade: 'Piquerobi'
        },
        {
          estado_id: '26',
          cidade: 'Martinópolis'
        },
        {
          estado_id: '26',
          cidade: 'Mirassolândia'
        },
        {
          estado_id: '26',
          cidade: 'Dumont'
        },
        {
          estado_id: '26',
          cidade: 'Brejo Alegre'
        },
        {
          estado_id: '26',
          cidade: 'Santa Lúcia'
        },
        {
          estado_id: '26',
          cidade: 'Corumbataí'
        },
        {
          estado_id: '26',
          cidade: 'Mendonça'
        },
        {
          estado_id: '26',
          cidade: 'Rio das Pedras'
        },
        {
          estado_id: '26',
          cidade: 'Potirendaba'
        },
        {
          estado_id: '26',
          cidade: 'Turiúba'
        },
        {
          estado_id: '26',
          cidade: 'Tarabai'
        },
        {
          estado_id: '26',
          cidade: 'Cordeirópolis'
        },
        {
          estado_id: '26',
          cidade: 'Magda'
        },
        {
          estado_id: '26',
          cidade: 'Cedral'
        },
        {
          estado_id: '26',
          cidade: 'Santos'
        },
        {
          estado_id: '26',
          cidade: 'Cajamar'
        },
        {
          estado_id: '26',
          cidade: 'Echaporã'
        },
        {
          estado_id: '26',
          cidade: 'Franca'
        },
        {
          estado_id: '26',
          cidade: 'Araçoiaba da Serra'
        },
        {
          estado_id: '26',
          cidade: 'Lourdes'
        },
        {
          estado_id: '26',
          cidade: 'Alto Alegre'
        },
        {
          estado_id: '26',
          cidade: 'Bocaina'
        },
        {
          estado_id: '26',
          cidade: 'Boituva'
        },
        {
          estado_id: '26',
          cidade: 'Amparo'
        },
        {
          estado_id: '26',
          cidade: 'Guararapes'
        },
        {
          estado_id: '26',
          cidade: 'Salto Grande'
        },
        {
          estado_id: '26',
          cidade: 'Ribeirão do Sul'
        },
        {
          estado_id: '26',
          cidade: 'Bento de Abreu'
        },
        {
          estado_id: '26',
          cidade: 'Oscar Bressane'
        },
        {
          estado_id: '26',
          cidade: 'Bady Bassitt'
        },
        {
          estado_id: '26',
          cidade: 'Presidente Alves'
        },
        {
          estado_id: '26',
          cidade: 'Cosmópolis'
        },
        {
          estado_id: '26',
          cidade: 'Embu-Guaçu'
        },
        {
          estado_id: '26',
          cidade: 'Indiana'
        },
        {
          estado_id: '26',
          cidade: 'Itanhaém'
        },
        {
          estado_id: '26',
          cidade: 'Canitar'
        },
        {
          estado_id: '26',
          cidade: 'Nuporanga'
        },
        {
          estado_id: '26',
          cidade: 'Valinhos'
        },
        {
          estado_id: '26',
          cidade: 'Presidente Bernardes'
        },
        {
          estado_id: '26',
          cidade: 'Guaimbê'
        },
        {
          estado_id: '26',
          cidade: 'Cubatão'
        },
        {
          estado_id: '26',
          cidade: 'Dourado'
        },
        {
          estado_id: '26',
          cidade: 'Ourinhos'
        },
        {
          estado_id: '26',
          cidade: 'Itirapuã'
        },
        {
          estado_id: '26',
          cidade: 'Motuca'
        },
        {
          estado_id: '26',
          cidade: 'Artur Nogueira'
        },
        {
          estado_id: '26',
          cidade: 'Ipiguá'
        },
        {
          estado_id: '26',
          cidade: 'Guarulhos'
        },
        {
          estado_id: '26',
          cidade: 'Taubaté'
        },
        {
          estado_id: '26',
          cidade: 'Itu'
        },
        {
          estado_id: '26',
          cidade: 'Saltinho'
        },
        {
          estado_id: '26',
          cidade: 'Regente Feijó'
        },
        {
          estado_id: '26',
          cidade: 'Santo Antônio do Aracanguá'
        },
        {
          estado_id: '26',
          cidade: 'Ibirarema'
        },
        {
          estado_id: '26',
          cidade: 'Bilac'
        },
        {
          estado_id: '26',
          cidade: 'Iracemápolis'
        },
        {
          estado_id: '26',
          cidade: 'Águas de São Pedro'
        },
        {
          estado_id: '26',
          cidade: 'Arujá'
        },
        {
          estado_id: '26',
          cidade: 'Caçapava'
        },
        {
          estado_id: '26',
          cidade: 'Guará'
        },
        {
          estado_id: '26',
          cidade: 'Restinga'
        },
        {
          estado_id: '26',
          cidade: 'Votorantim'
        },
        {
          estado_id: '26',
          cidade: 'Mogi Mirim'
        },
        {
          estado_id: '26',
          cidade: 'Vinhedo'
        },
        {
          estado_id: '26',
          cidade: 'Jardinópolis'
        },
        {
          estado_id: '26',
          cidade: 'Manduri'
        },
        {
          estado_id: '26',
          cidade: 'Bertioga'
        },
        {
          estado_id: '26',
          cidade: 'Paulínia'
        },
        {
          estado_id: '26',
          cidade: 'Cajati'
        },
        {
          estado_id: '26',
          cidade: 'Vargem Grande Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Itapevi'
        },
        {
          estado_id: '26',
          cidade: 'Pindamonhangaba'
        },
        {
          estado_id: '26',
          cidade: 'Campo Limpo Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Pirapozinho'
        },
        {
          estado_id: '26',
          cidade: 'Araraquara'
        },
        {
          estado_id: '26',
          cidade: 'Ipeúna'
        },
        {
          estado_id: '26',
          cidade: 'Lupércio'
        },
        {
          estado_id: '26',
          cidade: 'Carapicuíba'
        },
        {
          estado_id: '26',
          cidade: 'Álvaro de Carvalho'
        },
        {
          estado_id: '26',
          cidade: 'Piratininga'
        },
        {
          estado_id: '26',
          cidade: 'Mauá'
        },
        {
          estado_id: '26',
          cidade: 'São Joaquim da Barra'
        },
        {
          estado_id: '26',
          cidade: 'Guarujá'
        },
        {
          estado_id: '26',
          cidade: 'Álvares Machado'
        },
        {
          estado_id: '26',
          cidade: 'Jundiaí'
        },
        {
          estado_id: '26',
          cidade: 'Guaratinguetá'
        },
        {
          estado_id: '26',
          cidade: 'Hortolândia'
        },
        {
          estado_id: '26',
          cidade: 'Santa Bárbara d Oeste'
        },
        {
          estado_id: '26',
          cidade: 'Birigui'
        },
        {
          estado_id: '26',
          cidade: 'Presidente Prudente'
        },
        {
          estado_id: '26',
          cidade: 'Santo André'
        },
        {
          estado_id: '26',
          cidade: 'Lorena'
        },
        {
          estado_id: '26',
          cidade: 'Indaiatuba'
        },
        {
          estado_id: '26',
          cidade: 'Mogi Guaçu'
        },
        {
          estado_id: '26',
          cidade: 'Itupeva'
        },
        {
          estado_id: '26',
          cidade: 'Poá'
        },
        {
          estado_id: '26',
          cidade: 'Nova Odessa'
        },
        {
          estado_id: '26',
          cidade: 'Mogi das Cruzes'
        },
        {
          estado_id: '26',
          cidade: 'Sumaré'
        },
        {
          estado_id: '26',
          cidade: 'Americana'
        },
        {
          estado_id: '26',
          cidade: 'Caieiras'
        },
        {
          estado_id: '26',
          cidade: 'Osasco'
        },
        {
          estado_id: '26',
          cidade: 'Ribeirão Preto'
        },
        {
          estado_id: '26',
          cidade: 'Itapetininga'
        },
        {
          estado_id: '26',
          cidade: 'Rio Claro'
        },
        {
          estado_id: '26',
          cidade: 'Bauru'
        },
        {
          estado_id: '26',
          cidade: 'Santa Gertrudes'
        },
        {
          estado_id: '26',
          cidade: 'Ibaté'
        },
        {
          estado_id: '26',
          cidade: 'Itaquaquecetuba'
        },
        {
          estado_id: '26',
          cidade: 'Tremembé'
        },
        {
          estado_id: '26',
          cidade: 'Franco da Rocha'
        },
        {
          estado_id: '26',
          cidade: 'São Caetano do Sul'
        },
        {
          estado_id: '26',
          cidade: 'Coroados'
        },
        {
          estado_id: '26',
          cidade: 'Campinas'
        },
        {
          estado_id: '26',
          cidade: 'Jacareí'
        },
        {
          estado_id: '26',
          cidade: 'Araçatuba'
        },
        {
          estado_id: '26',
          cidade: 'Canas'
        },
        {
          estado_id: '26',
          cidade: 'São José dos Campos'
        },
        {
          estado_id: '26',
          cidade: 'Ferraz de Vasconcelos'
        },
        {
          estado_id: '26',
          cidade: 'São José do Rio Preto'
        },
        {
          estado_id: '26',
          cidade: 'Ribeirão Pires'
        },
        {
          estado_id: '26',
          cidade: 'São Roque'
        },
        {
          estado_id: '26',
          cidade: 'São Vicente'
        },
        {
          estado_id: '26',
          cidade: 'Marília'
        },
        {
          estado_id: '26',
          cidade: 'Itapecerica da Serra'
        },
        {
          estado_id: '26',
          cidade: 'Várzea Paulista'
        },
        {
          estado_id: '26',
          cidade: 'Louveira'
        },
        {
          estado_id: '26',
          cidade: 'Embu das Artes'
        },
        {
          estado_id: '26',
          cidade: 'Taboão da Serra'
        },
        {
          estado_id: '26',
          cidade: 'Suzano'
        },
        {
          estado_id: '26',
          cidade: 'São Paulo'
        },
        {
          estado_id: '26',
          cidade: 'São Carlos'
        },
        {
          estado_id: '26',
          cidade: 'São Bernardo do Campo'
        },
        {
          estado_id: '26',
          cidade: 'Aramina'
        },
        {
          estado_id: '26',
          cidade: 'Cotia'
        },
        {
          estado_id: '26',
          cidade: 'Américo Brasiliense'
        },
        {
          estado_id: '26',
          cidade: 'Sorocaba'
        },
        {
          estado_id: '26',
          cidade: 'Francisco Morato'
        },
        {
          estado_id: '26',
          cidade: 'Piracicaba'
        },
        {
          estado_id: '26',
          cidade: 'Santana de Parnaíba'
        },
        {
          estado_id: '26',
          cidade: 'Diadema'
        },
        {
          estado_id: '26',
          cidade: 'Leme'
        },
        {
          estado_id: '26',
          cidade: 'Barueri'
        },
        {
          estado_id: '26',
          cidade: 'Piraju'
        },
        {
          estado_id: '26',
          cidade: 'Potim'
        },
        {
          estado_id: '26',
          cidade: 'Rio Grande da Serra'
        },
        {
          estado_id: '26',
          cidade: 'Juquiá'
        },
        {
          estado_id: '26',
          cidade: 'Jandira'
        },
        {
          estado_id: '26',
          cidade: 'Jacupiranga'
        },
        {
          estado_id: '26',
          cidade: 'Roseira'
        },
        {
          estado_id: '26',
          cidade: 'Aparecida'
        },
        {
          estado_id: '26',
          cidade: 'Cruzeiro'
        },
        {
          estado_id: '26',
          cidade: 'Areias'
        },
        {
          estado_id: '27',
          cidade: 'Abreulândia'
        },
        {
          estado_id: '27',
          cidade: 'Aguiarnópolis'
        },
        {
          estado_id: '27',
          cidade: 'Aliança do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Almas'
        },
        {
          estado_id: '27',
          cidade: 'Alvorada'
        },
        {
          estado_id: '27',
          cidade: 'Ananás'
        },
        {
          estado_id: '27',
          cidade: 'Angico'
        },
        {
          estado_id: '27',
          cidade: 'Aparecida do Rio Negro'
        },
        {
          estado_id: '27',
          cidade: 'Aragominas'
        },
        {
          estado_id: '27',
          cidade: 'Araguacema'
        },
        {
          estado_id: '27',
          cidade: 'Araguaçu'
        },
        {
          estado_id: '27',
          cidade: 'Araguaína'
        },
        {
          estado_id: '27',
          cidade: 'Araguanã'
        },
        {
          estado_id: '27',
          cidade: 'Araguatins'
        },
        {
          estado_id: '27',
          cidade: 'Arapoema'
        },
        {
          estado_id: '27',
          cidade: 'Arraias'
        },
        {
          estado_id: '27',
          cidade: 'Augustinópolis'
        },
        {
          estado_id: '27',
          cidade: 'Aurora do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Axixá do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Babaçulândia'
        },
        {
          estado_id: '27',
          cidade: 'Bandeirantes do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Barra do Ouro'
        },
        {
          estado_id: '27',
          cidade: 'Barrolândia'
        },
        {
          estado_id: '27',
          cidade: 'Bernardo Sayão'
        },
        {
          estado_id: '27',
          cidade: 'Bom Jesus do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Brasilândia do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Brejinho de Nazaré'
        },
        {
          estado_id: '27',
          cidade: 'Buriti do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Cachoeirinha'
        },
        {
          estado_id: '27',
          cidade: 'Campos Lindos'
        },
        {
          estado_id: '27',
          cidade: 'Cariri do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Carmolândia'
        },
        {
          estado_id: '27',
          cidade: 'Carrasco Bonito'
        },
        {
          estado_id: '27',
          cidade: 'Caseara'
        },
        {
          estado_id: '27',
          cidade: 'Centenário'
        },
        {
          estado_id: '27',
          cidade: 'Chapada da Natividade'
        },
        {
          estado_id: '27',
          cidade: 'Chapada de Areia'
        },
        {
          estado_id: '27',
          cidade: 'Colinas do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Colméia'
        },
        {
          estado_id: '27',
          cidade: 'Combinado'
        },
        {
          estado_id: '27',
          cidade: 'Conceição do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Couto Magalhães'
        },
        {
          estado_id: '27',
          cidade: 'Cristalândia'
        },
        {
          estado_id: '27',
          cidade: 'Crixás do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Darcinópolis'
        },
        {
          estado_id: '27',
          cidade: 'Dianópolis'
        },
        {
          estado_id: '27',
          cidade: 'Divinópolis do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Dois Irmãos do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Dueré'
        },
        {
          estado_id: '27',
          cidade: 'Esperantina'
        },
        {
          estado_id: '27',
          cidade: 'Fátima'
        },
        {
          estado_id: '27',
          cidade: 'Figueirópolis'
        },
        {
          estado_id: '27',
          cidade: 'Filadélfia'
        },
        {
          estado_id: '27',
          cidade: 'Formoso do Araguaia'
        },
        {
          estado_id: '27',
          cidade: 'Fortaleza do Tabocão'
        },
        {
          estado_id: '27',
          cidade: 'Goianorte'
        },
        {
          estado_id: '27',
          cidade: 'Goiatins'
        },
        {
          estado_id: '27',
          cidade: 'Guaraí'
        },
        {
          estado_id: '27',
          cidade: 'Gurupi'
        },
        {
          estado_id: '27',
          cidade: 'Ipueiras'
        },
        {
          estado_id: '27',
          cidade: 'Itacajá'
        },
        {
          estado_id: '27',
          cidade: 'Itaguatins'
        },
        {
          estado_id: '27',
          cidade: 'Itapiratins'
        },
        {
          estado_id: '27',
          cidade: 'Itaporã do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Jaú do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Juarina'
        },
        {
          estado_id: '27',
          cidade: 'Lagoa da Confusão'
        },
        {
          estado_id: '27',
          cidade: 'Lagoa do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Lajeado'
        },
        {
          estado_id: '27',
          cidade: 'Lavandeira'
        },
        {
          estado_id: '27',
          cidade: 'Lizarda'
        },
        {
          estado_id: '27',
          cidade: 'Luzinópolis'
        },
        {
          estado_id: '27',
          cidade: 'Marianópolis do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Mateiros'
        },
        {
          estado_id: '27',
          cidade: 'Maurilândia do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Miracema do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Miranorte'
        },
        {
          estado_id: '27',
          cidade: 'Monte do Carmo'
        },
        {
          estado_id: '27',
          cidade: 'Monte Santo do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Muricilândia'
        },
        {
          estado_id: '27',
          cidade: 'Natividade'
        },
        {
          estado_id: '27',
          cidade: 'Nazaré'
        },
        {
          estado_id: '27',
          cidade: 'Nova Olinda'
        },
        {
          estado_id: '27',
          cidade: 'Nova Rosalândia'
        },
        {
          estado_id: '27',
          cidade: 'Novo Acordo'
        },
        {
          estado_id: '27',
          cidade: 'Novo Alegre'
        },
        {
          estado_id: '27',
          cidade: 'Novo Jardim'
        },
        {
          estado_id: '27',
          cidade: 'Oliveira de Fátima'
        },
        {
          estado_id: '27',
          cidade: 'Palmeirante'
        },
        {
          estado_id: '27',
          cidade: 'Palmeiras do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Palmeirópolis'
        },
        {
          estado_id: '27',
          cidade: 'Paraíso do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Paranã'
        },
        {
          estado_id: '27',
          cidade: 'Pau d Arco'
        },
        {
          estado_id: '27',
          cidade: 'Pedro Afonso'
        },
        {
          estado_id: '27',
          cidade: 'Peixe'
        },
        {
          estado_id: '27',
          cidade: 'Pequizeiro'
        },
        {
          estado_id: '27',
          cidade: 'Pindorama do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Piraquê'
        },
        {
          estado_id: '27',
          cidade: 'Pium'
        },
        {
          estado_id: '27',
          cidade: 'Ponte Alta do Bom Jesus'
        },
        {
          estado_id: '27',
          cidade: 'Ponte Alta do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Porto Alegre do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Porto Nacional'
        },
        {
          estado_id: '27',
          cidade: 'Praia Norte'
        },
        {
          estado_id: '27',
          cidade: 'Presidente Kennedy'
        },
        {
          estado_id: '27',
          cidade: 'Pugmil'
        },
        {
          estado_id: '27',
          cidade: 'Recursolândia'
        },
        {
          estado_id: '27',
          cidade: 'Riachinho'
        },
        {
          estado_id: '27',
          cidade: 'Rio da Conceição'
        },
        {
          estado_id: '27',
          cidade: 'Rio dos Bois'
        },
        {
          estado_id: '27',
          cidade: 'Rio Sono'
        },
        {
          estado_id: '27',
          cidade: 'Sampaio'
        },
        {
          estado_id: '27',
          cidade: 'Sandolândia'
        },
        {
          estado_id: '27',
          cidade: 'Santa Fé do Araguaia'
        },
        {
          estado_id: '27',
          cidade: 'Santa Maria do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Santa Rita do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Santa Rosa do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Santa Tereza do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Santa Terezinha do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'São Bento do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'São Félix do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'São Salvador do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'São Sebastião do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'São Valério'
        },
        {
          estado_id: '27',
          cidade: 'Silvanópolis'
        },
        {
          estado_id: '27',
          cidade: 'Sítio Novo do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Sucupira'
        },
        {
          estado_id: '27',
          cidade: 'Taguatinga'
        },
        {
          estado_id: '27',
          cidade: 'Taipas do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Talismã'
        },
        {
          estado_id: '27',
          cidade: 'Tocantínia'
        },
        {
          estado_id: '27',
          cidade: 'Tocantinópolis'
        },
        {
          estado_id: '27',
          cidade: 'Tupirama'
        },
        {
          estado_id: '27',
          cidade: 'Tupiratins'
        },
        {
          estado_id: '27',
          cidade: 'Wanderlândia'
        },
        {
          estado_id: '27',
          cidade: 'Xambioá'
        },
        {
          estado_id: '27',
          cidade: 'São Miguel do Tocantins'
        },
        {
          estado_id: '27',
          cidade: 'Palmas'
        },

      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cidade', null, {})
  }
};