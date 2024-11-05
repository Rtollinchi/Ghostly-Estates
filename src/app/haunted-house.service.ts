import { Injectable } from '@angular/core';

export interface HauntedHouse {
  id: number;
  name: string;
  location: {
    city: string;
    state: string;
    zip: string;
  };
  description: string;
  imageUrl: string;
  history?: string;
  price?: number;
  status?: 'For Sale' | 'Under Contract' | 'Sold';
}

@Injectable({
  providedIn: 'root',
})
export class HauntedHouseService {
  hauntedHouses: HauntedHouse[] = [
    {
      id: 1,
      name: 'Amityville Horror House',
      location: { city: 'Amityville', state: 'NY', zip: '11701' },
      description:
        'The infamous site of the 1974 DeFeo family murders, known for eerie apparitions reported by later residents.',
      imageUrl:
        'https://ei.marketwatch.com/Multimedia/2016/06/29/Photos/ZH/MW-EQ389_amityv_20160629095319_ZH.jpg?uuid=d64cff2a-3e00-11e6-89f4-0015c588dfa6',
      price: 925000,
      status: 'For Sale',
    },
    {
      id: 2,
      name: 'The Stanley Hotel',
      location: { city: 'Estes Park', state: 'CO', zip: '80517' },
      description:
        "Inspiration for Stephen King's 'The Shining,' famous for ghostly figures, mysterious piano music, and haunted halls.",
      imageUrl:
        'https://live.staticflickr.com/3687/9556931965_5729b37f18_b.jpg',
      status: 'Sold',
    },
    {
      id: 3,
      name: 'Winchester Mystery House',
      location: { city: 'San Jose', state: 'CA', zip: '95128' },
      description:
        'A labyrinth of staircases and doors to nowhere, built by Sarah Winchester to appease the spirits.',
      imageUrl:
        'https://bunny-usga.b-cdn.net/wp-content/uploads/2022/02/The-Winchester-House-Is-Haunted.png',
      status: 'Under Contract',
    },
    {
      id: 4,
      name: 'Myrtles Plantation',
      location: { city: 'St. Francisville', state: 'LA', zip: '70775' },
      description:
        'A historic plantation rumored to be haunted by the ghost of Chloe, a former slave.',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/58d00ac2db29d6778265a2e4/1492699335772-5DLJY7WWZ8ZHM6K7QGLZ/image-asset.jpeg',
      price: 1200000,
      status: 'For Sale',
    },
    {
      id: 5,
      name: 'Eastern State Penitentiary',
      location: { city: 'Philadelphia', state: 'PA', zip: '19130' },
      description:
        'A historic prison known for eerie sounds and ghost sightings in its empty corridors.',
      imageUrl:
        'https://adventure.com/wp-content/uploads/2017/06/Eastern-State-Penitentiary_Susan-Portnoy-04-1180x787.jpg',
      status: 'For Sale',
      price: 6000000,
    },
    {
      id: 6,
      name: 'The Queen Mary',
      location: { city: 'Long Beach', state: 'CA', zip: '90802' },
      description:
        'A retired ocean liner known for ghostly encounters, including former crew members and passengers.',
      imageUrl:
        'https://www.syfy.com/sites/syfy/files/2019/04/gettyimages-51832519.jpg',
      status: 'Sold',
    },
    {
      id: 7,
      name: 'Waverly Hills Sanatorium',
      location: { city: 'Louisville', state: 'KY', zip: '40272' },
      description:
        'A former tuberculosis hospital, often described as one of the most haunted locations in the United States.',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/58d00ac2db29d6778265a2e4/1508958394092-WL3QNSQH5A6ZI1TUFY74/image-asset.jpeg',
      status: 'For Sale',
      price: 5000000,
    },
    {
      id: 8,
      name: 'Bell Witch Cave',
      location: { city: 'Adams', state: 'TN', zip: '37010' },
      description:
        'The site of the Bell Witch legend, known for tales of poltergeist activity dating back to the 1800s.',
      imageUrl:
        'https://www.theleafchronicle.com/gcdn/-mm-/f4b967ec3342a862520536ea7cb75c568be85527/c=0-45-2182-2954/local/-/media/2015/10/20/USATODAY/USATODAY/635809469268590638-102015bell-witch-cave.jpg?width=660&height=880&fit=crop&format=pjpg&auto=webp',
      status: 'Sold',
    },
    {
      id: 9,
      name: 'Lemp Mansion',
      location: { city: 'St. Louis', state: 'MO', zip: '63103' },
      description:
        'A historic mansion with a tragic family history, believed to be haunted by the Lemp family members.',
      imageUrl:
        'https://www.usatoday.com/gcdn/presto/2020/10/27/USAT/39709cd9-5b2e-4b5e-9e04-ee4de2ef7012-Lemp_Mansion.jpg?width=1320&height=1138&fit=crop&format=pjpg&auto=webp',
      status: 'For Sale',
      price: 3000000,
    },
    {
      id: 10,
      name: 'Lizzie Borden House',
      location: { city: 'Fall River', state: 'MA', zip: '02720' },
      description:
        "The scene of the infamous axe murders, now rumored to be haunted by Lizzie Borden's parents.",
      imageUrl:
        'https://lizzie-borden.com/wp-content/themes/lizzieborden/img/lizzie_borden_house_main.jpg',
      status: 'For Sale',
      price: 800000,
    },
    {
      id: 11,
      name: 'St. Augustine Lighthouse',
      location: { city: 'St. Augustine', state: 'FL', zip: '32080' },
      description:
        'A historic lighthouse known for ghostly figures and mysterious sounds attributed to past lighthouse keepers and their families.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfUiJOkvjNN6-SGaivtypJatpuLzdsv9fEw&s',
      status: 'For Sale',
      price: 2250000,
    },
    {
      id: 12,
      name: 'Villisca Axe Murder House',
      location: { city: 'Villisca', state: 'IA', zip: '50864' },
      description:
        'Scene of an unsolved 1912 murder, where ghostly children and eerie sounds are reported to this day.',
      imageUrl:
        'https://bunny-usga.b-cdn.net/wp-content/themes/kadence/assets/images/murderhouse/Villisca-Ax-Murder-01.png',
      status: 'For Sale',
      price: 750000,
    },
    {
      id: 13,
      name: 'Farnsworth House Inn',
      location: { city: 'Gettysburg', state: 'PA', zip: '17325' },
      description:
        'Civil War site where ghostly soldiers and footsteps are reported by visitors and staff.',
      imageUrl:
        'https://farnsworthhouseinn.com/wp-content/uploads/2024/02/20240120_181141-1920x1440.jpg',
      status: 'For Sale',
      price: 3999999,
    },
    {
      id: 14,
      name: 'Whaley House',
      location: { city: 'San Diego', state: 'CA', zip: '92101' },
      description:
        'Famous for its paranormal activity, with sightings of past residents and strange happenings.',
      imageUrl:
        'https://www.whaleyhousesandiego.com/wp-content/uploads/2022/05/haunted-bedroom.jpg',
      status: 'Under Contract',
    },
    {
      id: 15,
      name: "Bachelor's Grove Cemetery",
      location: { city: 'Midlothian', state: 'IL', zip: '60445' },
      description:
        'Known for ghostly apparitions, including a woman in white and phantom cars that vanish.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTDip-79eQxT3UFA7NfmdoXiaFxnNgIWLAVeTmcJkplw0w-57xuPQ6ELpzSYETTpJz2R4&usqp=CAU',
      status: 'For Sale',
      price: 8000000,
    },
    {
      id: 16,
      name: 'The LaLaurie Mansion',
      location: { city: 'New Orleans', state: 'LA', zip: '70116' },
      description:
        'Home to Madame LaLaurie, known for the disturbing events and hauntings that followed her crimes.',
      imageUrl:
        'https://img.rezdy.com/PRODUCT_IMAGE/38117/LaLaurie_Mansion_at_Night_650_Rezdy_lg.jpg',
      status: 'Sold',
    },
    {
      id: 17,
      name: 'Old Charleston Jail',
      location: { city: 'Charleston', state: 'SC', zip: '29403' },
      description:
        'A historic jail where visitors report encounters with ghostly former inmates.',
      imageUrl:
        'https://res.cloudinary.com/simpleview/image/upload/c_fill,w_1024,h_576,q_auto:eco,f_auto,g_auto/crm/charleston/0Wk1WBkK_221FA2D5-C81D-46F5-8666FF20AD751A60_f472e6be-ae7b-49fe-a78c6dd82d4a8f65.jpg',
      status: 'For Sale',
      price: 22000000,
    },
    {
      id: 18,
      name: 'The Crescent Hotel',
      location: { city: 'Eureka Springs', state: 'AR', zip: '72632' },
      description:
        "Known as America's most haunted hotel, with sightings of ghostly former patients and staff.",
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9JvNbr8VeWxr1RroHJU0CFzwM8xUc8IyFA&s',
      status: 'For Sale',
      price: 5000000,
    },
    {
      id: 19,
      name: 'Ohio State Reformatory',
      location: { city: 'Mansfield', state: 'OH', zip: '44905' },
      description:
        'A former prison where visitors report ghostly figures and strange noises from the cells.',
      imageUrl:
        'https://npiweb.com/Portals/0/Blog/Article%20Images/Haunted%20Places/Ohio%20Reformatory/Ohio_State_Reformatory-10.jpg?ver=olCbrRCKegJayDzpNKwz_A%3D%3D',
      status: 'For Sale',
      price: 12000000,
    },
    {
      id: 20,
      name: 'The Pine Barrens',
      location: { city: 'New Jersey', state: 'NJ', zip: '08088' },
      description:
        'A forest steeped in legend, known for the sightings of the Jersey Devil.',
      imageUrl:
        'https://southjerseytrails.files.wordpress.com/2017/03/weymouth04.jpg',
      status: 'For Sale',
      price: 750000,
    },
  ];

  private hauntedHouseHistory: { [key: number]: string } = {
    1: 'Located in Amityville, New York, this house became infamous after Ronald DeFeo Jr. murdered six of his family members in 1974. A year later, the Lutz family moved in and experienced intense paranormal events, including strange noises, ghostly apparitions, and even physical attacks. The terrifying events in the house inspired the book The Amityville Horror and multiple movies.',

    2: "Nestled in Estes Park, Colorado, the Stanley Hotel is famous for inspiring Stephen King's The Shining. Built in 1909, the hotel is haunted by various spirits, including its original owner, F.O. Stanley, and his wife, Flora, who reportedly plays the piano at night. Guests and staff have experienced ghostly figures, laughter, and footsteps in the halls.",

    3: 'This architectural marvel in San Jose, California, was built by Sarah Winchester, the widow of the rifle magnate. Believing she was haunted by the spirits of those killed by Winchester rifles, she added bizarre elements like staircases to nowhere and hidden rooms to confuse the ghosts. Visitors frequently report eerie encounters and disembodied voices.',

    4: 'Located in St. Francisville, Louisiana, this historic plantation is rumored to be haunted by Chloe, an enslaved woman who allegedly poisoned the owner’s family. The plantation is also haunted by the spirits of children who died there, with guests reporting apparitions, ghostly sounds, and phantom footsteps.',

    5: 'Once a notorious prison in Philadelphia, Pennsylvania, Eastern State housed some of America’s most hardened criminals in isolation. The harsh conditions left many inmates mentally broken, and their tortured spirits are said to linger. Visitors report eerie whispers, shadowy figures, and a feeling of dread as they walk through the cellblocks.',

    6: 'A retired ocean liner docked in Long Beach, California, the Queen Mary is known for tragic deaths, including a young girl who drowned in the pool. The ship’s dark history includes fatal accidents and wartime service, and visitors claim to see ghosts of crew members and passengers, as well as hear unexplained footsteps.',

    7: 'This former tuberculosis hospital in Louisville, Kentucky, is often considered one of the most haunted locations in the U.S. Thousands of patients died there, many of them wheeled down the “death chute” to avoid public view. Visitors report apparitions, chilling whispers, and shadow figures wandering the corridors.',

    8: 'Near Adams, Tennessee, the Bell Witch legend began in the early 1800s when the Bell family was allegedly tormented by a spirit known as "Kate." The ghost inflicted physical attacks, and mysterious voices were heard. Today, the cave and property are said to be haunted, with reports of ghostly whispers and moving shadows.',

    9: 'This mansion in St. Louis, Missouri, was home to the Lemp family, who ran a successful brewery but suffered many personal tragedies. Several family members took their own lives in the home, and today, their spirits reportedly haunt the halls, with sightings of apparitions, strange sounds, and cold spots.',

    10: 'In Fall River, Massachusetts, this house was the site of the brutal 1892 axe murders of Andrew and Abby Borden. Although their daughter, Lizzie, was acquitted, the mystery lingers. Guests report hearing footsteps, voices, and even seeing apparitions, believed to be the spirits of the murdered Bordens.',

    11: 'Built in 1874, this lighthouse in St. Augustine, Florida, is known for paranormal activity attributed to past keepers and their families. Two young girls drowned on the property, and their spirits are said to linger. Visitors report hearing children’s laughter and spotting ghostly figures on the stairs.',

    12: 'This small house in Villisca, Iowa, was the site of a gruesome 1912 unsolved murder, where six children and two adults were killed with an axe. Visitors often report seeing apparitions of children, hearing whispers, and feeling an unshakable sense of dread.',

    13: 'Located in Gettysburg, Pennsylvania, this inn served as a hospital during the Civil War, and ghostly soldiers are said to still roam the halls. Guests report hearing footsteps, seeing shadowy figures, and experiencing the cold touch of ghostly hands.',

    14: 'Built on former gallows in San Diego, California, the Whaley House is haunted by Thomas Whaley, his family, and the spirits of executed criminals. Visitors report eerie apparitions, footsteps, and disembodied voices throughout the historic home.',

    15: 'Known for ghostly phenomena, this cemetery in Midlothian, Illinois, has apparitions of a woman in white, ghostly cars that vanish, and strange lights. Paranormal investigators often visit to capture evidence of the unexplained activity reported here.',

    16: 'In New Orleans, Louisiana, this mansion was once home to Madame LaLaurie, infamous for her cruel treatment of enslaved people. After a fire exposed her horrific acts, the building became haunted by those who suffered. Reports include ghostly screams, apparitions, and cold spots.',

    17: 'This historic jail in Charleston, South Carolina, held infamous criminals and housed many tragedies. Visitors report encounters with the spirits of former inmates and hearing ghostly chains rattling, especially in the cells and hallways.',

    18: 'Known as “America’s most haunted hotel,” this historic Eureka Springs, Arkansas, hotel was once a hospital run by a fraudulent doctor. Many patients died, and their spirits reportedly linger, with visitors witnessing apparitions, lights flickering, and hearing disembodied voices.',

    19: 'Built in Mansfield, Ohio, this reformatory was known for its brutal conditions and prisoner deaths. Ghostly figures and strange noises are often reported by visitors, especially in solitary confinement areas.',

    20: 'This large forest in New Jersey is home to the legendary Jersey Devil, a creature said to be born of a curse. For centuries, locals have reported strange sounds, sightings of the devil, and eerie lights among the trees.',
  };

  constructor() {}

  getHauntedHouses() {
    return this.hauntedHouses;
  }

  getHauntedHouse(id: number) {
    return this.hauntedHouses.find((house) => house.id === id);
  }

  getHauntedHouseHistory(id: number): string | undefined {
    return this.hauntedHouseHistory[id];
  }

  addHauntedHouse(house: HauntedHouse): void {
    this.hauntedHouses.push(house);
  }

  addHauntedHouseHistory(id: number, historyDetails: string) {
    this.hauntedHouseHistory[id] = historyDetails;
  }

  updateHauntedHouse(updatedHouse: HauntedHouse): void {
    const index = this.hauntedHouses.findIndex(
      (house) => house.id === updatedHouse.id
    );

    if (index !== -1) {
      this.hauntedHouses[index] = updatedHouse;
    }

    if (updatedHouse.history) {
      this.addHauntedHouseHistory(updatedHouse.id, updatedHouse.history);
    }
  }

  deleteHauntedHouse(id: number): void {
    this.hauntedHouses = this.hauntedHouses.filter((house) => house.id !== id);
  }
}
