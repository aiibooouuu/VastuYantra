import React, { useState } from 'react';
import './remedies.css';

const remediesData = [

        {
          room: 'Kitchen',
          ideal: 'Southeast',
          reason: 'According to Vastu Shastra, the Southeast direction is governed by the fire element, also known as Agni. Placing the kitchen in this zone aligns with the natural energy flow and encourages good digestion, health, and prosperity in the household. Fire represents energy, transformation, and nourishment — all of which are essential to food preparation. If the kitchen is placed in the right direction, it ensures harmony among family members and promotes a peaceful domestic environment.',
          remedy: 'If your kitchen is not in the Southeast and cannot be relocated, remedies can help balance the fire element. You can place a red bulb, candle, or any fire-related object (like a red triangle or red flowers) in the Southeast corner of your kitchen. Avoid placing the kitchen in the North or Northeast, as these directions are water-dominated and clash with fire. In such cases, using copper vessels or placing a Vastu pyramid in the fire zone can also help to counteract negative effects.'
        },
        {
          room: 'Hall',
          ideal: 'North or East',
          reason: 'The Hall or Living Room is the heart of the house where guests are entertained and families spend quality time. According to Vastu, placing the hall in the North or East invites morning sunlight and positive energy into the home, encouraging openness and optimism. These directions enhance the welcoming nature of the space and create a harmonious atmosphere. Proper alignment with these zones improves social interactions and brings good fortune.',
          remedy: 'If your hall is placed in the South or West, balance the energy by painting the walls in light or neutral shades like cream or beige to enhance the brightness. Mirrors placed on the North or East walls can help reflect light and energy into the room. Ensure the Northeast corner of the hall remains uncluttered to allow energy to flow freely. Incorporating houseplants and bright lighting can further energize the space.'
        },
        {
          room: 'Bedroom',
          ideal: 'Southwest',
          reason: 'The Southwest is considered the zone of stability and strength in Vastu. Placing the master bedroom here promotes emotional balance, peace of mind, and stronger personal relationships. This direction is linked with the earth element, which offers grounding and support — ideal qualities for rest and rejuvenation. A bedroom in the Southwest supports restful sleep, enhances security, and brings long-term relationship harmony.',
          remedy: 'If the bedroom is not in the Southwest, you can create stability by placing a heavy object or furniture piece (like a wardrobe) in the Southwest corner of the room. Using earthy colors such as brown, ochre, or beige in the room’s decor can enhance the grounding effect. Avoid mirrors directly opposite the bed, and ensure that the head of the bed points towards the South or East. These changes help mimic the benefits of the ideal direction.'
        },
        {
          room: 'Bathroom',
          ideal: 'Northwest or West',
          reason: 'Bathrooms deal with water and waste disposal, and the Northwest or West directions are ideal because they facilitate proper flow and drainage of energy. Placing bathrooms in these directions ensures that the waste water leaves the house without affecting the sacred or spiritual energy in other zones. It helps maintain hygienic balance and prevents stagnation of energy that may lead to health or financial issues.',
          remedy: 'If your bathroom is located in the Northeast, a zone considered sacred and sensitive in Vastu, it is essential to purify the space. Always keep the bathroom dry, clean, and well-ventilated. Place bowls of sea salt in corners to absorb negative energy and replace them weekly. You can also use essential oils like eucalyptus or lavender for purification. Installing a Vastu pyramid near the bathroom can help neutralize the effects.'
        },
        {
          room: 'Toilet',
          ideal: 'Northwest or Southeast',
          reason: 'Toilets should ideally be in the Northwest or Southeast directions as these zones are good for removing unwanted or waste energy from the house. These areas support good airflow and drainage, which is essential for hygiene and preventing negative energy from affecting other parts of the home. Correct placement of the toilet ensures minimal disruption to the spiritual and energetic balance of the home.',
          remedy: 'If the toilet is placed in the Northeast — a highly spiritual and sensitive zone — steps must be taken to mitigate the ill effects. Always keep the toilet door shut when not in use. Use lemon-scented diffusers or oils to refresh the space. Hanging a small Vastu pyramid or placing copper strips around the doorframe can help block the spread of negative energy. You may also place a green plant outside to absorb and filter energy.'
        },
        {
          room: 'Drawing Room',
          ideal: 'North or East',
          reason: 'The drawing room is a formal space where guests are entertained. North and East directions are ideal as they ensure the flow of natural light and promote open communication and hospitality. The drawing room in these zones creates a vibrant and peaceful environment, helps build positive social impressions, and fosters good relationships with guests and visitors.',
          remedy: 'If the drawing room is in the South or Southwest, balance the space using bright artificial lighting and mirrors on the Northern or Eastern walls. Keep the Northeast corner clean and clutter-free to allow energy circulation. Using soft furnishings, fresh flowers, and light wall colors can make the room feel more inviting. Plants or water features can also help activate stagnant zones.'
        },
        {
          room: 'Pooja Room',
          ideal: 'Northeast',
          reason: 'The Pooja Room or prayer space should ideally be located in the Northeast, which is considered the most divine and spiritually powerful direction in Vastu. This zone is known for its high vibrational energy and enhances meditation, prayer, and mental clarity. The Northeast direction allows maximum exposure to morning sunlight, symbolizing purity and positive cosmic flow.',
          remedy: 'If placing the Pooja Room in the Northeast is not possible, try to locate it in the East or West. Ensure that idols or pictures face East or West while praying. Use brass lamps, bells, and incense sticks daily to create a spiritual ambiance. Keep the space clean and sacred, and avoid placing it below a staircase or adjacent to a bathroom. You can also energize the space with Vastu crystals or copper plates.'
        },
        {
            room: 'Study Room',
            ideal: 'North or Northeast',
            reason: 'The North and Northeast directions are excellent for concentration, clarity of thought, and intellectual development. These zones are governed by Mercury and Jupiter — planets associated with communication, wisdom, and knowledge. Placing the study room here ensures a calm, focused environment ideal for learning, reading, or working from home. Natural light in these zones also boosts productivity and mental clarity.',
            remedy: 'If the study room is not in the North or Northeast, make sure the study desk faces East or North while sitting. Use calming, neutral tones on the walls and place green indoor plants or study-enhancing crystals like fluorite or citrine on the desk. Avoid placing mirrors or heavy objects behind the seating area. A wall clock on the North wall can also help stimulate focus and time awareness.'
        }
      
      
];

const Remedies = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="remedies-container">
      {remediesData.map((item, index) => (
        <div 
          key={index} 
          className={`remedy-item ${openIndex === index ? "expanded" : ""}`} 
          onClick={() => toggleAccordion(index)}
        >
          <div className="remedy-question">
            <span>{item.room}</span>
            <button className="remedy-toggle">{openIndex === index ? "−" : "+"}</button>
          </div>
          <div className={`remedy-answer ${openIndex === index ? 'show' : ''}`}>
            <p><strong>Ideal Placement:</strong> {item.ideal}</p>
            <p><strong>Why:</strong> {item.reason}</p>
            <p><strong>Remedy:</strong> {item.remedy}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Remedies;
