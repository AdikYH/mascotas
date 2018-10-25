import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RazaService {

  private razaPerros: any = [{"especie":"Affenpinscher"},{"especie":"Airedale terrier"},{"especie":"Aïdi"},{"especie":"Akita Inu"},{"especie":"Akita Americano"},{"especie":"Alano español"},{"especie":"Alaskan malamute"},{"especie":"Alaskan Klee Kai"},{"especie":"American Hairless terrier"},{"especie":"American Staffordshire Terrier"},{"especie":"Antiguo Perro Pastor Inglés"},{"especie":"Appenzeller"},{"especie":"Australian Cattle Dog"},{"especie":"Australian terrier"},{"especie":"Australian Silky Terrier"},{"especie":"Azawakh"},{"especie":"Bardino (Perro majorero)"},{"especie":"Basenji"},{"especie":"Basset azul de Gascuña"},{"especie":"Basset hound"},{"especie":"Beagle"},{"especie":"Beauceron"},{"especie":"Bedlington terrier"},{"especie":"Bergamasco"},{"especie":"Bichon frisé"},{"especie":"Bichón maltés"},{"especie":"Bichón habanero"},{"especie":"Bobtail"},{"especie":"Bloodhound"},{"especie":"Border collie"},{"especie":"Borzoi"},{"especie":"Boston terrier"},{"especie":"Bóxer"},{"especie":"Boyero de Berna"},{"especie":"Boyero de Flandes"},{"especie":"Braco alemán de pelo corto"},{"especie":"Braco alemán de pelo duro"},{"especie":"Braco de Auvernia"},{"especie":"Braco francés"},{"especie":"Braco húngaro"},{"especie":"Braco italiano"},{"especie":"Braco tirolés"},{"especie":"Braco de Saint Germain"},{"especie":"Braco de Weimar"},{"especie":"Bull Terrier"},{"especie":"Bulldog americano"},{"especie":"Bulldog francés"},{"especie":"Bulldog inglés"},{"especie":"Bullmastiff"},{"especie":"Buhund noruego"},{"especie":"Can de palleiro"},{"especie":"Caniche"},{"especie":"Cão da Serra da Estrela"},{"especie":"Cão da Serra de Aires"},{"especie":"Cão de Agua Português"},{"especie":"Cão de Castro Laboreiro"},{"especie":"Cão de Fila de São Miguel"},{"especie":"Cavalier King Charles Spaniel"},{"especie":"Cazador de alces noruego"},{"especie":"Chesapeake Bay Retriever"},{"especie":"Chihuahueño"},{"especie":"Crestado Chino"},{"especie":"Cimarrón Uruguayo"},{"especie":"Cirneco del Etna"},{"especie":"Chow chow"},{"especie":"Clumber spaniel"},{"especie":"Cobrador de pelo liso"},{"especie":"Cocker spaniel americano"},{"especie":"Cocker spaniel inglés"},{"especie":"Collie de pelo corto"},{"especie":"Collie de pelo largo"},{"especie":"Bearded collie"},{"especie":"Corgi galés de Cardigan"},{"especie":"Dachshund"},{"especie":"Dálmata"},{"especie":"Dandie Dinmont Terrier"},{"especie":"Deerhound"},{"especie":"Dobermann"},{"especie":"Dogo alemán"},{"especie":"Dogo argentino"},{"especie":"Dogo de burdeos"},{"especie":"Dogo del Tíbet"},{"especie":"Dogo guatemalteco"},{"especie":"English springer spaniel"},{"especie":"Entlebucher"},{"especie":"Épagneul bretón"},{"especie":"Épagneul français"},{"especie":"Epagneul papillón"},{"especie":"Eurasier"},{"especie":"Fila Brasileiro"},{"especie":"Flat-Coated Retriever"},{"especie":"Fox Terrier"},{"especie":"Foxhound americano"},{"especie":"Galgo español"},{"especie":"Galgo húngaro"},{"especie":"Galgo inglés"},{"especie":"Galgo italiano"},{"especie":"Golden retriever"},{"especie":"Glen of Imaal Terrier"},{"especie":"Gran danés"},{"especie":"Gegar colombiano"},{"especie":"Greyhound"},{"especie":"Grifón belga"},{"especie":"Hovawart"},{"especie":"Husky siberiano"},{"especie":"Jack Russell Terrier"},{"especie":"Keeshond"},{"especie":"Kerry blue terrier"},{"especie":"Komondor"},{"especie":"Kuvasz"},{"especie":"Labrador"},{"especie":"Lakeland Terrier"},{"especie":"Laekenois"},{"especie":"Landseer"},{"especie":"Lebrel afgano"},{"especie":"Lebrel polaco"},{"especie":"Leonberger"},{"especie":"Lobero irlandés"},{"especie":"Lundehund"},{"especie":"Perro lobo de Saarloos"},{"especie":"Lhasa apso"},{"especie":"Löwchen"},{"especie":"Maltés"},{"especie":"Malinois"},{"especie":"Manchester terrier"},{"especie":"Mastín afgano"},{"especie":"Mastín del Pirineo"},{"especie":"Mastín español"},{"especie":"Mastín inglés"},{"especie":"Mastín italiano"},{"especie":"Mastín napolitano"},{"especie":"Mastín tibetano"},{"especie":"Mucuchies"},{"especie":"Mudi"},{"especie":"Münsterländer grande"},{"especie":"Münsterländer pequeño"},{"especie":"Nova Scotia Duck Tolling Retriever"},{"especie":"Ovejero magallánico"},{"especie":"Pastor alemán"},{"especie":"Pastor belga"},{"especie":"Pastor blanco suizo"},{"especie":"Pastor catalán"},{"especie":"Pastor croata"},{"especie":"Pastor garafiano"},{"especie":"Pastor holandés"},{"especie":"Pastor peruano Chiribaya"},{"especie":"Pastor de Brie"},{"especie":"Pastor de los Pirineos"},{"especie":"Pastor leonés"},{"especie":"Pastor mallorquín"},{"especie":"Pastor maremmano-abrucés"},{"especie":"Pastor de Valée"},{"especie":"Pastor vasco"},{"especie":"Pekinés"},{"especie":"Pembroke Welsh Corgi"},{"especie":"Pequeño Lebrel Italiano"},{"especie":"Perdiguero francés"},{"especie":"Perdiguero portugués"},{"especie":"Perro cimarrón uruguayo"},{"especie":"Perro de agua americano"},{"especie":"Perro de agua español"},{"especie":"Perro de agua irlandés"},{"especie":"Perro de agua portugués"},{"especie":"Perro de Groenlandia"},{"especie":"Perro de osos de Carelia"},{"especie":"Perro dogo mallorquín"},{"especie":"Perro esquimal canadiense"},{"especie":"Perro de Montaña de los Pirineos"},{"especie":"Perro fino colombiano"},{"especie":"Perro pastor de las islas Shetland"},{"especie":"Perro peruano sin pelo"},{"especie":"Phalène"},{"especie":"Pinscher alemán"},{"especie":"Pinscher miniatura"},{"especie":"Pitbull"},{"especie":"Podenco canario"},{"especie":"Podenco ibicenco"},{"especie":"Podenco portugués"},{"especie":"Pointer"},{"especie":"Pomerania"},{"especie":"Presa canario"},{"especie":"Pudelpointer"},{"especie":"Pug"},{"especie":"Puli"},{"especie":"Pumi"},{"especie":"Rafeiro do Alentejo"},{"especie":"Ratonero bodeguero andaluz"},{"especie":"Ratonero mallorquín"},{"especie":"Ratonero valenciano"},{"especie":"Rhodesian Ridgeback"},{"especie":"Rottweiler"},{"especie":"Saluki"},{"especie":"Samoyedo"},{"especie":"San Bernardo"},{"especie":"Schapendoes"},{"especie":"Schnauzer estándar"},{"especie":"Schnauzer gigante"},{"especie":"Schnauzer miniatura"},{"especie":"Staffordshire Bull Terrier"},{"especie":"Sabueso bosnio"},{"especie":"Schipperke"},{"especie":"Sealyham terrier"},{"especie":"Setter inglés"},{"especie":"Setter irlandés"},{"especie":"Shar Pei"},{"especie":"Shiba Inu"},{"especie":"Shih Tzu"},{"especie":"Shikoku Inu"},{"especie":"Siberian husky"},{"especie":"Skye terrier"},{"especie":"Spaniel japonés"},{"especie":"Spaniel tibetano"},{"especie":"Spitz enano"},{"especie":"Spitz grande"},{"especie":"Spitz mediano"},{"especie":"Spitz japonés"},{"especie":"Sussex spaniel"},{"especie":"Teckel"},{"especie":"Terranova"},{"especie":"Terrier alemán"},{"especie":"Terrier brasileño"},{"especie":"Terrier checo"},{"especie":"Terrier chileno"},{"especie":"Terrier de Norfolk"},{"especie":"Terrier de Norwich"},{"especie":"Terrier escocés"},{"especie":"Terrier galés"},{"especie":"Terrier irlandés"},{"especie":"Terrier ruso negro"},{"especie":"Terrier tibetano"},{"especie":"Toy spaniel inglés"},{"especie":"Tervueren"},{"especie":"Vallhund sueco"},{"especie":"Volpino italiano"},{"especie":"Weimaraner"},{"especie":"West Highland White Terrier"},{"especie":"Whippet"},{"especie":"Wolfsspitz"},{"especie":"Xoloitzcuintle"},{"especie":"Yorkshire terrier"}];

  private razaGatos: any = [{"especie":"Abisinio"},{"especie":"American Curl"},{"especie":"Azul ruso"},{"especie":"American shorthair"},{"especie":"American wirehair"},{"especie":"Angora turco"},{"especie":"Africano doméstico"},{"especie":"Bengala"},{"especie":"Bobtail japonés"},{"especie":"Bombay"},{"especie":"Bosque de Noruega"},{"especie":"Brazilian Shorthair"},{"especie":"Brivon de pelo corto"},{"especie":"Brivon de pelo largo"},{"especie":"British Shorthair"},{"especie":"Burmés"},{"especie":"Burmilla"},{"especie":"Cornish rex"},{"especie":"California Spangled"},{"especie":"Ceylon"},{"especie":"Cymric"},{"especie":"Chartreux"},{"especie":"Deutsch Langhaar"},{"especie":"Devon rex"},{"especie":"Dorado africano"},{"especie":"Don Sphynx"},{"especie":"Dragon Li"},{"especie":"Europeo Común"},{"especie":"Exótico de Pelo Corto"},{"especie":"Gato europeo bicolor"},{"especie":"FoldEx"},{"especie":"German Rex"},{"especie":"Habana brown"},{"especie":"Himalayo"},{"especie":"Korat"},{"especie":"Khao Manee"},{"especie":"Maine Coon"},{"especie":"Manx"},{"especie":"Mau egipcio"},{"especie":"Munchkin"},{"especie":"Ocicat"},{"especie":"Oriental"},{"especie":"Oriental de pelo largo"},{"especie":"PerFold1​"},{"especie":"Persa Americano o Moderno"},{"especie":"Persa Clásico o Tradicional2​"},{"especie":"Peterbald"},{"especie":"Pixie Bob"},{"especie":"Ragdoll"},{"especie":"Sagrado de Birmania"},{"especie":"Scottish Fold"},{"especie":"Selkirk rex"},{"especie":"Serengeti"},{"especie":"Seychellois"},{"especie":"Siamés"},{"especie":"Siamés Moderno"},{"especie":"Siamés Tradicional"},{"especie":"Siberiano"},{"especie":"Snowshoe"},{"especie":"Sphynx"},{"especie":"Tonkinés"},{"especie":"Van Turco"}]

  private razaOtros: any = [{"especie":"hamster"}, {"especie":"tortuga"}]


  constructor() {

  }

  getRazaPerros(){
    return this.razaPerros;
  }

  getRazaGatos(){
    return this.razaGatos;
  }

  getRazaOtros(){
    return this.razaOtros;
  }
}
