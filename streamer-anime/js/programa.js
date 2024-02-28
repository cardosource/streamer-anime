const bannerImagensLegendas ={"Ninja Kamui" :{"ninjakamui.png":"Um ex-membro de um clã ninja desistiu para viver uma vida tranquila com sua esposa e filho. Uma noite, sua família morre após ser atacada por uma organização misteriosa. O homem é torturado pelas consequências."},
                       "Bleach: Thousand-Year Blood War": {"BleachThousandYearBloodWar.jpg":"Após ser derrotado pela Sociedade das Almas há mais de mil anos, o rei Yhwach, pai de todos os Quincies, retorna com seu exército em busca de vingança contra os Soul Reapers"},
                        "Solo Leveling":{"SoloLeveling.jpeg":"Solo Leveling é um anime baseado na série de webtoon coreana de mesmo nome.A história segue Sung Jin-Woo, um caçador fraco que se torna um dos mais poderosos do mundo depois de descobrir um sistema de nível único"}
                    }

const animeBanner = Object.keys(bannerImagensLegendas);
const imagemBanner = document.getElementById("banner")
const nomeAnime  = document.getElementById("canimename")
const descricao = document.getElementById("descricao")
const passagemBanner = document.querySelectorAll("#um, #dois, #tres")

function banner(rodar, selecionar){
    return ()=>{
    return rodar(selecionar()   )
    }

}

const x = banner(
    ()=>{
let contador = 0;

setInterval(function() {
  const animeName = animeBanner[contador];
  const imageInfo = bannerImagensLegendas[animeName];
  const imageName = Object.keys(imageInfo)[0];
  const legend = Object.values(imageInfo)[0];
  nomeAnime.innerHTML = animeName
  imagemBanner.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.647), rgb(0 0 0 / 89%)), url('imgs/${imageName}')`
  passagemBanner[contador].style.backgroundColor = "#7A7D79"
  descricao.innerHTML = legend
  for(let bn of passagemBanner){
    bn.style.backgroundColor = "transparent";
  }
  passagemBanner[contador].style.backgroundColor = "#7A7D79";
  contador++;
  
  if (contador >= animeBanner.length) {
    contador =0
 }
}, 9000);
       
    },
    ()=>{
       passagemBanner.forEach(function(btn,idx){
        btn.addEventListener("click",(ad)=>{
            ad.preventDefault()
            for(let bn of passagemBanner){
                bn.style.backgroundColor = "transparent";
              }
                 const animeName = animeBanner[idx];
                 const imageInfo = bannerImagensLegendas[animeName];
                 const imageName = Object.keys(imageInfo)[0];
                 const legend = Object.values(imageInfo)[0];
                 nomeAnime.innerHTML = animeName
                 descricao.innerHTML = legend
                 imagemBanner.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.647), rgb(0 0 0 / 89%)), url('imgs/${imageName}')`
                 passagemBanner[idx].style.backgroundColor = "#7A7D79";
        })
       })
    }
)


x()