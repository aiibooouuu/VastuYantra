import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  

  const faqs = [
    {
      question: "What is Vastu Shastra?",
      answer: "Vastu Shastra is an ancient Indian science of architecture and spatial alignment that dates back thousands of years. Derived from Sanskrit, 'Vastu' means dwelling, and 'Shastra' means science or doctrine. It outlines principles and guidelines for constructing buildings in harmony with natural forces and cosmic energy. It emphasizes aligning structures with the five elements—Earth, Water, Fire, Air, and Space—to bring balance and positivity. The goal is to promote physical, mental, and spiritual well-being by ensuring proper orientation, proportion, and placement of various spaces. Modern Vastu integrates these ancient principles into contemporary living, making environments more peaceful and successful."
    },
    {
      question: "Why is Vastu important in modern homes?",
      answer: "Vastu Shastra is relevant even today because it brings structure, direction, and energy alignment to modern homes. As people spend most of their time indoors, the surrounding energy directly influences their mood, relationships, finances, and health. A well-aligned home according to Vastu principles supports mental clarity, prosperity, and peace. Vastu helps position rooms, furniture, and utilities in ways that reduce stress and promote balance. Though modern architecture has evolved, incorporating Vastu provides a natural harmony that reduces conflict, improves productivity, and enhances emotional well-being. Many architects and interior designers today integrate Vastu for clients seeking a more positive home environment."
    },
    {
      question: "Can Vastu be applied to apartments and rented homes?",
      answer: "Yes, Vastu Shastra can be applied to apartments, rented homes, and even commercial spaces. While construction-based Vastu changes may not always be possible in such cases, energy alignment can be improved using interior-based remedies. This includes proper placement of mirrors, plants, colors, furniture, and décor items. Additionally, direction-based usage of rooms—for example, using a northeast room as a puja room or placing the bed away from the north—is a non-structural Vastu correction. Use of Vastu pyramids, crystals, and symbols can also balance the energy. Even minor adjustments based on the directions can bring noticeable positive changes over time."
    },
    {
      question: "What is the significance of directions in Vastu?",
      answer: "Directions are central to Vastu Shastra as each of the eight cardinal directions—North, South, East, West, and the four corners (NE, NW, SE, SW)—is governed by specific energies and elements. Each direction has a ruling deity or planet and influences particular aspects of life. For instance, the North is ruled by Kuber, the god of wealth, and is ideal for financial activities. East signifies growth and is excellent for entrances or living rooms. Vastu aligns the functional spaces like bedrooms, kitchens, and toilets to suitable directions to optimize energy flow. Misalignment of directions can lead to health or financial troubles."
    },
    {
      question: "How does Vastu affect health and relationships?",
      answer: "Vastu influences the flow of energy in a living space, which directly affects mental and physical health. An imbalanced Vastu setup, such as a bedroom in the wrong direction or a kitchen facing North, can cause stress, anxiety, and recurring health issues. Similarly, improper arrangement of furniture or mirrors can create conflicts and misunderstandings among family members. Aligning rooms with favorable directions like placing the master bedroom in the Southwest or meditation space in the Northeast promotes harmony and restful sleep. Vastu remedies such as using salt bowls, crystals, and energizing colors also contribute to emotional and relational well-being."
    },
    {
      question: "What are the five elements in Vastu and their roles?",
      answer: "The five elements in Vastu—Earth (Prithvi), Water (Jal), Fire (Agni), Air (Vayu), and Space (Akash)—form the foundation of cosmic balance. Every structure or space should aim to balance these elements in design and utility. Earth provides stability and grounding and is represented by direction-based room placements. Water is associated with flow and should be in the North or Northeast, influencing wealth and emotions. Fire governs energy and metabolism, best placed in the Southeast (ideal for kitchens). Air represents freshness and ventilation, aligned with the Northwest. Space symbolizes openness and expansion, associated with central spaces. Disbalance can cause energy blockages."
    },
    {
      question: "Is Vastu Shastra backed by science?",
      answer: "Though rooted in spiritual and traditional principles, Vastu has several scientific underpinnings. It aligns with natural phenomena like sunlight direction, magnetic field influence, and wind flow. For instance, Vastu suggests placing windows and entrances towards the East to allow early morning sunlight, which boosts vitamin D and biological rhythms. It recommends avoiding sleep with the head facing North, aligning with magnetic repulsion effects on the body. Additionally, it integrates logic behind airflow, spatial ventilation, and energy conservation. While Vastu is not a hard science, its empirical benefits and alignment with environmental psychology give it credibility in contemporary studies and practices."
    },
    {
      question: "How can I know if my house is Vastu compliant?",
      answer: "You can assess your home's Vastu compliance by evaluating the placement and orientation of rooms according to cardinal directions. Tools like a compass or a Vastu Calculator can help determine whether the kitchen, bedrooms, bathrooms, puja room, and entrances are in Vastu-recommended zones. A proper Vastu layout includes a kitchen in the Southeast, master bedroom in the Southwest, and the entrance in the East or North. If these elements are misaligned, you may experience recurring issues like stress, financial trouble, or health concerns. Using our app’s calculator tool will help you understand your home’s Vastu score and suggest effective remedies."
    },
    {
      question: "What remedies are available for Vastu defects?",
      answer: "When structural changes aren’t feasible, Vastu remedies help balance energy through symbolic and elemental corrections. Common remedies include placing mirrors to deflect negative energy, using salt lamps for purification, or setting up copper swastikas and pyramids in specific directions. Use of colors is also vital—cool tones in the North, warm tones in the South. Placing plants like Tulsi (Holy Basil) in the Northeast or using energized crystals like amethyst and rose quartz helps restore harmony. Remedies vary by defect type and must be used mindfully. Consultation with a Vastu expert can further personalize solutions based on your living space."
    },
    {
      question: "What is the ideal direction for the main entrance?",
      answer: "The main entrance of a home is considered the 'mouth of energy' in Vastu Shastra. Ideally, it should be located in the North, East, or Northeast direction. These directions are governed by deities such as Indra (East) and Kuber (North) who bring positive vibrations and prosperity. An East-facing door invites early sunlight and clarity, while a North-facing one attracts wealth. South or Southwest-facing entrances are generally considered less favorable unless well-balanced with Vastu remedies like metallic nameplates, pyramid placements, or specific plants. Properly energizing the entrance area with light, cleanliness, and symbols like Om or Swastik also improves energy flow."
    },
    {
      question: "Can Vastu Shastra improve mental health and stress levels?",
      answer:
        "Yes, Vastu Shastra emphasizes harmony between natural elements and human dwellings, which can significantly influence mental well-being. A home aligned with Vastu principles ensures smooth energy flow, eliminating spaces that might cause emotional stagnation or stress. For example, placing your study or meditation zone in the northeast promotes mental clarity. Rooms painted in calming colors like cream or green, clutter-free zones, and open layouts reduce stress. Avoiding dark corners and ensuring good sunlight and ventilation are also key. Although Vastu isn't a replacement for therapy, its practices contribute to a more peaceful and emotionally supportive environment."
    },
    {
      question: "What are some common Vastu doshas (defects) and how can they be corrected?",
      answer:
        "Vastu doshas refer to imbalances in layout or direction that disrupt energy flow. Common doshas include toilets in the northeast, kitchens in the north, or bedrooms in the southeast—each considered inauspicious. Remedies don’t always require structural changes. For instance, placing a Vastu pyramid, using mirrors strategically, or installing spiritual yantras can help. Colors also act as remedies: using earth tones in the southwest or avoiding dark reds in the northeast helps restore balance. Some doshas can also be corrected by realigning furniture or through symbolic tools like copper wires, salt bowls, and crystals. Vastu experts tailor solutions case by case."
    },
    {
      question: "Is there any connection between Vastu and the five elements of nature?",
      answer:
        "Absolutely. Vastu Shastra is deeply rooted in the balance of the Panchamahabhutas—the five elements: Earth (Prithvi), Water (Jal), Fire (Agni), Air (Vayu), and Space (Akash). Each element governs a direction. For instance, water relates to the northeast, fire to the southeast, air to the northwest, and earth to the southwest. Disrespecting this balance can cause discomfort or stagnation in one’s life. Proper orientation ensures that, for example, water features are placed in the northeast to attract prosperity, and fire elements like kitchens remain in the southeast. Harmonizing these elements creates a balanced, nurturing environment."
    },
    {
      question: "Does the main door direction matter in Vastu?",
      answer:
        "Yes, the main entrance is considered the most important part of a structure in Vastu. It is the gateway for energy to enter the home or office. Ideally, the entrance should face east or north as these directions are associated with positivity, sunlight, and growth. South-facing entrances can be acceptable if corrected with Vastu remedies. A well-lit, clean, and clutter-free entrance attracts good fortune, while a blocked or poorly maintained door may obstruct positive energy. Adding symbols like the Swastik, Om, or torans above the door further enhances protection and good vibes."
    },
    {
      question: "Is it necessary to demolish a structure to fix Vastu issues?",
      answer:
        "Not at all. Modern Vastu remedies have evolved to be practical and adaptable. You don’t need to break walls or reconstruct rooms to correct Vastu doshas. Many issues can be resolved using simple adjustments such as changing room usage, placing mirrors, adding specific plants or colors, or using pyramids and yantras. In severe cases, minimal renovation might be advised. The aim is to restore balance with minimal disruption. Consultation with a knowledgeable Vastu practitioner ensures practical and effective solutions that align with both Vastu and your daily lifestyle."
    },
    {
      question: "Can Vastu be applied to rented homes or apartments?",
      answer:
        "Yes, Vastu can be adapted for rented homes and apartments even if you can't make permanent changes. Small modifications like repositioning furniture, adding Vastu pyramids, using the right colors, and placing certain elements in the correct direction can help balance the energies. For example, if the kitchen is not in the southeast (its ideal location), placing a small mirror or using copper vessels might mitigate negative effects. Keeping the northeast corner clean and open, using plants or water bowls, and sleeping with your head to the south are all manageable Vastu corrections for tenants."
    },
    {
      question: "How does Vastu influence financial stability?",
      answer:
        "Vastu emphasizes specific zones and directions that influence wealth and prosperity. The north and northeast zones are associated with wealth and financial growth. Keeping these zones clutter-free, clean, and energized with water elements, indoor plants, or a money plant helps attract abundance. South-west is the zone of stability, so keeping heavy storage or safes here ensures financial grounding. Avoid placing bathrooms or junk in the northeast. Using colors like green or light blue in relevant areas supports financial flow. While Vastu alone doesn’t guarantee wealth, it removes blockages that may be hindering financial success."
    },
    {
      question: "Can Vastu be applied to commercial spaces or offices?",
      answer:
        "Definitely. Vastu principles can significantly improve productivity, communication, and financial outcomes in commercial spaces. For offices, the boss should ideally sit in the southwest corner facing north or east, while employees can sit facing east or north. Pantry areas are best placed in the southeast, while toilets should be avoided in the northeast. The reception area should be in the northeast or east with a welcoming desk. Proper Vastu design helps in creating a positive environment where employees feel motivated, focused, and harmonious, which in turn benefits the growth of the organization."
    },
    {
      question: "Are there any specific Vastu tips for bedrooms?",
      answer:
        "Yes, Vastu recommends that the master bedroom be located in the southwest corner of the house, promoting stability and restful sleep. The bed should be placed so that your head points south while sleeping, aligning with Earth’s magnetic field. Avoid mirrors directly facing the bed as they may lead to disturbed sleep or conflict. Choose soothing colors like light blue or beige. Keep electronics to a minimum and avoid placing them under the bed. Keeping the bedroom clean, ventilated, and clutter-free not only aligns with Vastu but also supports better sleep and emotional balance."
    },
    {
      question: "What Vastu principles apply to children's study areas?",
      answer:
        "For maximum concentration and academic success, Vastu recommends placing the study area in the northeast, north, or east direction. The child should face east or north while studying. Avoid placing the study table directly under a beam or facing a blank wall. A solid wall behind the study chair symbolizes support and stability. Keep the area well-lit with natural sunlight or warm white bulbs. Avoid clutter and keep study-related materials neatly arranged. Light green or yellow colors are preferred for walls as they stimulate intellect and focus. Avoid placing televisions or loud distractions near study areas."
    },
    {
      question: "How does Vastu apply to kitchen design?",
      answer:
        "The kitchen is governed by the fire element (Agni), and the ideal location for it is the southeast direction. If southeast is unavailable, northwest is the second-best option. The cooking stove should ideally be placed in the southeast corner of the kitchen, and the person cooking should face east. Avoid placing the stove and sink next to each other as fire and water elements clash. Use colors like orange, red, or light yellow in the kitchen to enhance energy. Maintain cleanliness and avoid storing old or unused items, as clutter disturbs the fire energy."
    },
    {
      question: "What role do colors play in Vastu?",
      answer:
        "Colors have a powerful psychological and energetic impact in Vastu. Each direction is associated with a color and an element. For instance, light blue and green are ideal for the northeast (water element), enhancing peace and creativity. The southeast (fire) benefits from red or orange tones, while the southwest (earth) supports beige or light brown. Colors like white or light cream work well in central areas. Avoid using dark or gloomy shades excessively, especially in the northeast. By choosing the right colors based on direction and function, you enhance energy flow and emotional well-being in any space."
    },
    {
      question: "What is the significance of placing mirrors in Vastu?",
      answer:
        "Mirrors represent the water element and are highly reflective, which means they can redirect energy. According to Vastu, they should never face the bed or be placed in the south or southwest as they may disturb rest and stability. Mirrors work well in the north and east directions and can help expand space visually and energetically. In cramped or blocked areas, mirrors can improve light and energy movement. Placing a mirror in front of a cash locker (facing north) is said to symbolically double wealth. Always ensure mirrors are clean and not cracked, as damaged ones attract negative energy."
    },
    {
      question: "Can Vastu help improve interpersonal relationships?",
      answer:
        "Yes, Vastu plays a role in strengthening relationships, particularly those among family members. The southwest direction governs love, marriage, and stability. Keeping this area clean, using earthy tones, and placing family photographs here strengthens bonds. Avoid placing sharp objects or water elements like aquariums in the southwest, as they may disrupt emotional balance. The northwest governs relationships with relatives and external connections, so maintaining harmony here helps in social bonding. Balanced energy flow in living and dining spaces ensures open communication and togetherness. Vastu-aligned homes support harmony not just structurally, but emotionally and spiritually as well."
    },
    {
      question: "Are there any scientific studies supporting Vastu Shastra?",
      answer:
        "Vastu Shastra is largely considered a traditional practice, but some aspects align with modern environmental psychology and design principles. For instance, orientation to natural light, airflow, clutter-free spaces, and room placement all impact mental and physical well-being. The alignment of beds, use of natural elements, and preference for certain colors coincide with best practices in architecture and interior design. While there aren’t many large-scale scientific validations, individual studies and anecdotal evidence suggest that Vastu-aligned spaces improve sleep, reduce stress, and enhance focus. Thus, Vastu can be considered a blend of traditional wisdom and practical design logic."
    }
    
  
    // Add 15 more below or I can generate them in a second response if you'd like to split it.
  ];
  
  


  return (
    <div className="home-container">
      <div className="vastu-intro-container">
  <h2 className="intro-heading">🪔 Vastu Shastra Introduction</h2>
  <p className="intro-paragraph">
    Vastu Shastra is the ancient Indian science of architecture and spatial design that harmonizes nature's five core elements—Earth, Water, Fire, Air, and Space—with your living or working environment. Rooted in spiritual wisdom and natural balance, Vastu aims to improve health, happiness, and prosperity by aligning spaces with universal energies. Whether you're planning a new home or making changes in an existing one, understanding these foundational principles can positively influence your lifestyle.
  </p>

  <h3 className="elements-heading">🌟 The Five Elements of Vastu Shastra</h3>
  <div className="elements-row">
    {[
      {
        emoji: "🌍",
        name: "Earth",
        sanskrit: "Prithvi",
        icon: "🗻",
        desc: "Represents stability, support, and strength. It governs the southwest direction and is vital for balance and grounded energy in a home."
      },
      {
        emoji: "💧",
        name: "Water",
        sanskrit: "Jal",
        icon: "🌊",
        desc: "Symbolizes purification, flow, and abundance. Linked with the northeast direction, it brings clarity, intuition, and prosperity."
      },
      {
        emoji: "🔥",
        name: "Fire",
        sanskrit: "Agni",
        icon: "🔥",
        desc: "Reflects energy, passion, and transformation. Associated with the southeast, fire is essential for vitality and kitchen placement."
      },
      {
        emoji: "🌬️",
        name: "Air",
        sanskrit: "Vayu",
        icon: "🍃",
        desc: "Represents movement, creativity, and communication. The northwest direction governs air, influencing relationships and flexibility."
      },
      {
        emoji: "🌌",
        name: "Space",
        sanskrit: "Aakash",
        icon: "✨",
        desc: "Denotes expansion, consciousness, and connection to the divine. Found at the center of the structure, it ties all other elements together."
      }
    ].map((el, index) => (
      <div className="element-card" key={index}>
        <div className="element-icon">{el.emoji}</div>
        <h4>{el.name} <span className="sanskrit-name">({el.sanskrit})</span></h4>
        <p>{el.desc}</p>
      </div>
    ))}
  </div>
</div>
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`faq-item ${openIndex === index ? "expanded" : ""}`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="faq-question">
            <span>{faq.question}</span>
            <button className="faq-toggle">{openIndex === index ? "−" : "+"}</button>
          </div>
          <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;