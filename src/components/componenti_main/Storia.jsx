/* eslint-disable react/no-unescaped-entities */
import "../../Style/stile_componenti_main/Storia.css";


function Storia() {
  return (
    <>
     <div className="main">
        {/* prima parte della storia */}
        <div className="main1">
          <h2>La Nascita della Matematica: Un Viaggio Storico</h2>
          <p>
            La matematica, come disciplina fondamentale, ha radici profonde che
            risalgono a migliaia di anni fa, intrecciandosi con le prime civiltà
            umane. Il suo sviluppo è un affascinante viaggio attraverso epoche e
            culture diverse, ognuna delle quali ha contribuito in modo unico al
            suo progresso.
          </p>
        </div>

        {/* div 2  */}

        <div className="main2">
          <img
            src="https://mathbox.latteseditori.it/images/immaginel.jpg"
            alt="matematica antichita'"
            
            
            className="img1"
          />
          <div className="antichita">
            <h3>Antichita'</h3>
            <p>
              La matematica nacque dalle necessità pratiche delle prime società
              umane. Le civiltà della Mesopotamia e dell'Antico Egitto (circa
              3000-500 a.C.) furono tra le prime a sviluppare sistemi numerici.
              I Sumeri e i Babilonesi, per esempio, utilizzavano un sistema in
              base 60 per registrare calcoli su tavolette di argilla,
              sviluppando anche tabelle trigonometriche e risolvendo equazioni
              quadratiche. Gli Egiziani, invece, usavano un sistema decimale e
              svilupparono tecniche geometriche essenziali per la costruzione di
              piramidi e la gestione delle terre agricole, come testimoniato dai
              papiri matematici.
            </p>
          </div>
        </div>

        {/* div 3 grecia antica */}
        <div className="main3">
          <h3>Grecia antica</h3>
          <p>
            Il contributo della Grecia Antica (circa 600 a.C.-300 d.C.) fu
            cruciale nella formalizzazione della matematica. Tales di Mileto
            introdusse la deduzione logica e i primi teoremi geometrici, mentre
            Pitagora fondò una scuola che studiava la relazione tra numeri e
            forme, culminando nel celebre teorema di Pitagora. Euclide
            sistematizzò la geometria con la sua opera "Elementi", che rimase un
            riferimento per secoli. Archimede fece scoperte significative in
            geometria, calcolo integrale e meccanica, mentre Ipparco e Tolomeo
            avanzarono la trigonometria e l'astronomia.
          </p>
        </div>

        {/* div medioevo */}
        <div className="main4">
          <div className="medioevo">
            <h3>Medioevo</h3>
            <p>
              Durante il Medioevo, la matematica fiorì soprattutto in India e
              nel mondo islamico (500-1500 d.C.). In India, matematici come
              Brahmagupta e Aryabhata svilupparono l'uso dello zero e il sistema
              numerico posizionale, oltre a contribuire significativamente
              all'algebra e alla trigonometria. Nel mondo islamico, studiosi
              come Al-Khwarizmi (da cui deriva il termine "algoritmo") e Omar
              Khayyam tradussero e ampliarono le opere greche e indiane,
              sviluppando l'algebra e la trigonometria sferica. Le loro opere
              furono fondamentali per la matematica medievale europea, che le
              riscoprì e le utilizzò come base per ulteriori sviluppi.
            </p>
          </div>
          <img
            src="https://www.repstatic.it/content/nazionale/img/2020/12/08/185051915-5f7c87b3-984c-4934-8a86-87008b18389f.jpg"
            className="img2"
            alt="immagine matematica"
            
          />
        </div>

        {/* div rinascimento e eta moderna */}

        <div className="main5">
          <h3>Rinascimento e eta' moderna</h3>
          <p>
            Il Rinascimento segnò una rinascita della matematica in Europa
            (1500-1800). Leonardo Fibonacci introdusse la successione di
            Fibonacci e diffuse l'uso dei numeri arabi in Europa. Cartesio e
            Fermat svilupparono la geometria analitica e la teoria dei numeri,
            mentre Isaac Newton e Gottfried Wilhelm Leibniz, indipendentemente,
            svilupparono il calcolo differenziale e integrale, rivoluzionando la
            fisica e l'ingegneria. Blaise Pascal e Pierre de Fermat posero le
            basi della teoria delle probabilità, e matematici come Leonhard
            Euler e Carl Friedrich Gauss fecero avanzamenti significativi in
            molte branche della matematica. Il XIX secolo vide lo sviluppo
            dell'algebra astratta e della logica. Niels Henrik Abel e Évariste
            Galois fondarono l'algebra moderna studiando i gruppi e le equazioni
            polinomiali, mentre George Boole fondò l'algebra booleana,
            essenziale per l'informatica. La geometria non euclidea fu
            sviluppata da matematici come Bernhard Riemann e Nikolai
            Lobachevsky, aprendo nuove prospettive in matematica e fisica.
            Augustin-Louis Cauchy, Karl Weierstrass e Bernhard Riemann fecero
            avanzamenti significativi in analisi complessa e reale.
          </p>
        </div>

        {/* div 20 e 21 secolo */}
        <div className="main6">
          <img
            src="https://educamundo.com.br/wp-content/uploads/2024/06/matematica-moderna-2.webp"
            alt="immagine matematica"
            className="img3"
           
          />
          <div className="oggi">
            <h3>XX e XXI secolo</h3>
            <p>
              Nel XX e XXI secolo, la matematica continuò a espandersi in nuove
              direzioni. Emmy Noether fece contributi profondi all'algebra
              astratta e alla fisica teorica, mentre John von Neumann e Alan
              Turing furono pionieri nell'informatica, con contributi
              fondamentali agli algoritmi, alla teoria della computabilità e
              all'architettura dei computer. La teoria del caos e i sistemi
              dinamici, sviluppati da Edward Lorenz e altri, studiarono il
              comportamento complesso e imprevedibile dei sistemi dinamici.
              Matematici come Stephen Hawking e Roger Penrose utilizzarono la
              matematica avanzata per esplorare la cosmologia e i buchi neri.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Storia;
