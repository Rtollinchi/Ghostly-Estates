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
    },
    {
      id: 2,
      name: 'The Stanley Hotel',
      location: { city: 'Estes Park', state: 'CO', zip: '80517' },
      description:
        "Inspiration for Stephen King's 'The Shining,' famous for ghostly figures, mysterious piano music, and haunted halls.",
      imageUrl:
        'https://live.staticflickr.com/3687/9556931965_5729b37f18_b.jpg',
    },
    {
      id: 3,
      name: 'Winchester Mystery House',
      location: { city: 'San Jose', state: 'CA', zip: '95128' },
      description:
        'A labyrinth of staircases and doors to nowhere, built by Sarah Winchester to appease the spirits.',
      imageUrl:
        'https://bunny-usga.b-cdn.net/wp-content/uploads/2022/02/The-Winchester-House-Is-Haunted.png',
    },
    {
      id: 4,
      name: 'Myrtles Plantation',
      location: { city: 'St. Francisville', state: 'LA', zip: '70775' },
      description:
        'A historic plantation rumored to be haunted by the ghost of Chloe, a former slave.',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/58d00ac2db29d6778265a2e4/1492699335772-5DLJY7WWZ8ZHM6K7QGLZ/image-asset.jpeg',
    },
    {
      id: 5,
      name: 'Eastern State Penitentiary',
      location: { city: 'Philadelphia', state: 'PA', zip: '19130' },
      description:
        'A historic prison known for eerie sounds and ghost sightings in its empty corridors.',
      imageUrl:
        'https://adventure.com/wp-content/uploads/2017/06/Eastern-State-Penitentiary_Susan-Portnoy-04-1180x787.jpg',
    },
    {
      id: 6,
      name: 'The Queen Mary',
      location: { city: 'Long Beach', state: 'CA', zip: '90802' },
      description:
        'A retired ocean liner known for ghostly encounters, including former crew members and passengers.',
      imageUrl:
        'https://www.syfy.com/sites/syfy/files/2019/04/gettyimages-51832519.jpg',
    },
    {
      id: 7,
      name: 'Waverly Hills Sanatorium',
      location: { city: 'Louisville', state: 'KY', zip: '40272' },
      description:
        'A former tuberculosis hospital, often described as one of the most haunted locations in the United States.',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/58d00ac2db29d6778265a2e4/1508958394092-WL3QNSQH5A6ZI1TUFY74/image-asset.jpeg',
    },
    {
      id: 8,
      name: 'Bell Witch Cave',
      location: { city: 'Adams', state: 'TN', zip: '37010' },
      description:
        'The site of the Bell Witch legend, known for tales of poltergeist activity dating back to the 1800s.',
      imageUrl:
        'https://www.theleafchronicle.com/gcdn/-mm-/f4b967ec3342a862520536ea7cb75c568be85527/c=0-45-2182-2954/local/-/media/2015/10/20/USATODAY/USATODAY/635809469268590638-102015bell-witch-cave.jpg?width=660&height=880&fit=crop&format=pjpg&auto=webp',
    },
    {
      id: 9,
      name: 'Lemp Mansion',
      location: { city: 'St. Louis', state: 'MO', zip: '63103' },
      description:
        'A historic mansion with a tragic family history, believed to be haunted by the Lemp family members.',
      imageUrl:
        'https://www.usatoday.com/gcdn/presto/2020/10/27/USAT/39709cd9-5b2e-4b5e-9e04-ee4de2ef7012-Lemp_Mansion.jpg?width=1320&height=1138&fit=crop&format=pjpg&auto=webp',
    },
    {
      id: 10,
      name: 'Lizzie Borden House',
      location: { city: 'Fall River', state: 'MA', zip: '02720' },
      description:
        "The scene of the infamous axe murders, now rumored to be haunted by Lizzie Borden's parents.",
      imageUrl:
        'https://lizzie-borden.com/wp-content/themes/lizzieborden/img/lizzie_borden_house_main.jpg',
    },
    {
      id: 11,
      name: 'St. Augustine Lighthouse',
      location: { city: 'St. Augustine', state: 'FL', zip: '32080' },
      description:
        'A historic lighthouse known for ghostly figures and mysterious sounds attributed to past lighthouse keepers and their families.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfUiJOkvjNN6-SGaivtypJatpuLzdsv9fEw&s',
    },
    {
      id: 12,
      name: 'Villisca Axe Murder House',
      location: { city: 'Villisca', state: 'IA', zip: '50864' },
      description:
        'Scene of an unsolved 1912 murder, where ghostly children and eerie sounds are reported to this day.',
      imageUrl:
        'https://bunny-usga.b-cdn.net/wp-content/themes/kadence/assets/images/murderhouse/Villisca-Ax-Murder-01.png',
    },
    {
      id: 13,
      name: 'Farnsworth House Inn',
      location: { city: 'Gettysburg', state: 'PA', zip: '17325' },
      description:
        'Civil War site where ghostly soldiers and footsteps are reported by visitors and staff.',
      imageUrl:
        'https://farnsworthhouseinn.com/wp-content/uploads/2024/02/20240120_181141-1920x1440.jpg',
    },
    {
      id: 14,
      name: 'Whaley House',
      location: { city: 'San Diego', state: 'CA', zip: '92101' },
      description:
        'Famous for its paranormal activity, with sightings of past residents and strange happenings.',
      imageUrl:
        'https://www.whaleyhousesandiego.com/wp-content/uploads/2022/05/haunted-bedroom.jpg',
    },
    {
      id: 15,
      name: "Bachelor's Grove Cemetery",
      location: { city: 'Midlothian', state: 'IL', zip: '60445' },
      description:
        'Known for ghostly apparitions, including a woman in white and phantom cars that vanish.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTDip-79eQxT3UFA7NfmdoXiaFxnNgIWLAVeTmcJkplw0w-57xuPQ6ELpzSYETTpJz2R4&usqp=CAU',
    },
    {
      id: 16,
      name: 'The LaLaurie Mansion',
      location: { city: 'New Orleans', state: 'LA', zip: '70116' },
      description:
        'Home to Madame LaLaurie, known for the disturbing events and hauntings that followed her crimes.',
      imageUrl:
        'https://img.rezdy.com/PRODUCT_IMAGE/38117/LaLaurie_Mansion_at_Night_650_Rezdy_lg.jpg',
    },
    {
      id: 17,
      name: 'Old Charleston Jail',
      location: { city: 'Charleston', state: 'SC', zip: '29403' },
      description:
        'A historic jail where visitors report encounters with ghostly former inmates.',
      imageUrl:
        'https://ghostcitytours.com/cdn-cgi/image/quality=60,f=auto,w=1110,h=634/images/charleston/haunted-places/charleston-jail/haunted-charleston-jail.jpg',
    },
    {
      id: 18,
      name: 'The Crescent Hotel',
      location: { city: 'Eureka Springs', state: 'AR', zip: '72632' },
      description:
        "Known as America's most haunted hotel, with sightings of ghostly former patients and staff.",
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9JvNbr8VeWxr1RroHJU0CFzwM8xUc8IyFA&s',
    },
    {
      id: 19,
      name: 'Ohio State Reformatory',
      location: { city: 'Mansfield', state: 'OH', zip: '44905' },
      description:
        'A former prison where visitors report ghostly figures and strange noises from the cells.',
      imageUrl:
        'https://npiweb.com/Portals/0/Blog/Article%20Images/Haunted%20Places/Ohio%20Reformatory/Ohio_State_Reformatory-10.jpg?ver=olCbrRCKegJayDzpNKwz_A%3D%3D',
    },
    {
      id: 20,
      name: 'The Pine Barrens',
      location: { city: 'New Jersey', state: 'NJ', zip: '08088' },
      description:
        'A forest steeped in legend, known for the sightings of the Jersey Devil.',
      imageUrl:
        'https://southjerseytrails.files.wordpress.com/2017/03/weymouth04.jpg',
    },
  ];

  constructor() {}

  getHauntedHouses() {
    return this.hauntedHouses;
  }

  getHauntedHouse(id: number) {
    return this.hauntedHouses.find((house) => house.id === id);
  }
}
