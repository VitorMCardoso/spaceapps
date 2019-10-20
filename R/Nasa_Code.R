###Leitura Pacotes

packages <- c("data.table","ggplot2","readxl","corrplot","gridExtra")
for(i in 1:length(packages)){
  if(!(packages[i] %in% installed.packages()))
    install.packages(packages[i])
  library(packages[i],character.only=TRUE)
}

###Pasta Raiz
setwd("C:\\Users\\Tomás Weguelin\\Documents\\Nasa")


###Leitura Dados
dados <- fread("Dados_Clima.txt")
dados <- dados[,list(TempMaxima = max(TempMaxima,na.rm = T),
                     TempMinima = min(TempMinima,na.rm = T),
                     Insolacao= max(Insolacao,na.rm = T),
                     Umi= max(`Umidade Relativa Media`,na.rm = T),
                     Vento= max(`Velocidade do Vento Media`,na.rm = T)),
               by = list(Data)]


dados2 <- fread("dados_Influenza2016.txt")

###Limpeza Dados
dados2 <- dados2[,c("SE","Casos")]
dados2 <- cbind(dados2,rep("2016",52))
colnames(dados2) <- c("Semana","Casos","Ano")
dados$Data2 <- as.Date(as.character(dados$Data),"%d/%m/%Y")
dados$Ano <- year(dados$Data2)
dados <- dados[which(dados$Ano==2016),]
dados$isoweek <- isoweek(dados$Data2)


###Agregacao Dados em semanas
dadosweek <- dados[,list(TempMaxima = mean(TempMaxima,na.rm = T),
                        TempMinima = mean(TempMinima,na.rm = T),
                        Insolacao= mean(Insolacao,na.rm = T),
                        Umi= mean(Umi,na.rm = T),
                        Vento= mean(Vento,na.rm = T)),
                   by = list(isoweek)]
dadosweek <- dadosweek[-which(dadosweek$isoweek==53),]

###Join dois datasets
dados3 <- merge(dados2,dadosweek,by.x = "Semana",by.y = "isoweek", all.x = T,all.y = F)


###Variaveis do Modelo
dadosmodeling <- dados3[,c("Casos","TempMaxima","TempMinima","Insolacao","Umi","Vento")]

###Limpeza de dados
dadosmodeling<- dadosmodeling[-which(is.infinite(dadosmodeling$TempMaxima)),]
dadosmodeling <- dadosmodeling[-which(is.infinite(dadosmodeling$TempMinima)),]
dadosmodeling <- dadosmodeling[-which(is.infinite(dadosmodeling$Insolacao)),]


###Estatisticas Descritivas
summary(dadosmodeling)


###Graficos Distribuicoes Variaveis Preditoras
a <- ggplot(dadosmodeling, aes(x=TempMaxima)) + 
  geom_histogram(aes(y=..density..),position="identity",colour="black",binwidth = 1,fill="lightblue")+
  geom_density(alpha=.6,fill = "lightblue")+
  theme_minimal()+
  theme(
    panel.grid.major = element_blank(),
    panel.grid.minor = element_blank(),
    panel.border = element_blank(),
    panel.background = element_blank()
  )

b <- ggplot(dadosmodeling, aes(x=TempMinima)) + 
  geom_histogram(aes(y=..density..),position="identity",colour="black",binwidth = 1,fill="lightblue")+
  geom_density(alpha=.6,fill = "lightblue")+
  theme_minimal()+
  theme(
    panel.grid.major = element_blank(),
    panel.grid.minor = element_blank(),
    panel.border = element_blank(),
    panel.background = element_blank()
  )

c <- ggplot(dadosmodeling, aes(x=Insolacao)) + 
  geom_histogram(aes(y=..density..),position="identity",colour="black",binwidth = 1,fill="lightblue")+
  geom_density(alpha=.6,fill = "lightblue")+
  theme_minimal()+
  theme(
    panel.grid.major = element_blank(),
    panel.grid.minor = element_blank(),
    panel.border = element_blank(),
    panel.background = element_blank()
  )

d <- ggplot(dadosmodeling, aes(x=Umi)) + 
  geom_histogram(aes(y=..density..),position="identity",colour="black",binwidth = 1,fill="lightblue")+
  geom_density(alpha=.6,fill = "lightblue")+
  theme_minimal()+
  theme(
    panel.grid.major = element_blank(),
    panel.grid.minor = element_blank(),
    panel.border = element_blank(),
    panel.background = element_blank()
  )

e <- ggplot(dadosmodeling, aes(x=Vento)) + 
  geom_histogram(aes(y=..density..),position="identity",colour="black",binwidth = .1,fill="lightblue")+
  geom_density(alpha=.6,fill = "lightblue")+
  theme_minimal()+
  theme(
    panel.grid.major = element_blank(),
    panel.grid.minor = element_blank(),
    panel.border = element_blank(),
    panel.background = element_blank()
  )

grid.arrange(a,b,c,d,e,ncol = 2,nrow= 3)


###Matriz de Correlacao
M <- cor(dadosmodeling,method = "spearman")
corrplot(M,method  = "number")

###Modelo Poisson (Contagem)
modelo <- glm(Casos~. ,family = poisson(link = "log"),data = dadosmodeling)
summary(modelo)

###Analise de residuos do Modelo
#plot(modelo)
hist(residuals(modelo))

