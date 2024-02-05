import React from 'react';
import { Card, Avatar } from 'antd';

const FoodLocationCard = ({ name, location, usage, discount, image }) => {
    return (
      <Card
        hoverable
        style={{ width: 350 }}
        cover={<img src={image} />}
      >
        <Card.Meta
          title={<span style={{fontSize: "200%"}} >{name}</span>}
          description={
            <div>
              <p>Location: {location}</p>
              <p style={{fontWeight: 'normal'}}>{usage} People Used</p>
              <p style={{ color: 'white', fontWeight: 'bold', backgroundColor: '#b9dc2f', marginRight: '220px', borderRadius:'25px', padding:'5px' 
             }}>{discount}</p>
            </div>
          }
        />
      </Card>
    );
  };
  
  const FoodDiscount = () => {
    const foodLocations = [
      {
        name: '18 Chefs',
        location: '123 Main Street, Cityville',
        discount: '30% off',
        usage:'435',
        image: 'https://www.capitaland.com/content/dam/capitaland-sites/singapore/shop/malls/bugis-junction/tenants/BJ_Eighteen%20Chef.jpg.transform/cap-midres/image.jpg', 
      },
      {
        name: 'Hot Hideout',
        location: '21 Nanyang Street',
        discount: '20% off',
        usage:'1205',
        image: 'https://i0.wp.com/greatnewplaces.com/wp-content/uploads/2023/02/GNP-Headline-AHH.jpg?resize=1536%2C1053&ssl=1', 
      },
      {
        name: 'Ichiran Ramen',
        location: '2 Singapore District',
        discount: '10% off',
        usage:'12',
        image: 'https://cdn11.bigcommerce.com/s-u7fvaz2rcv/images/stencil/1280w/carousel/65/Ramen_Kit_Bowl_with_Ramen_Kit_Contents.jpg?c=1', 
      },
      {
        name: 'Dominoes Pizza',
        location: '50 Changi Island #04-01',
        discount: '50% off',
        usage:'52',
        image: 'https://www.dominos.com.sg/ManagedAssets/SG/product/PDES/SG_PDES_en_hero_11917.jpg?v1825131774', 
      },
    ];
  
    return (
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px' }}>
          {foodLocations.map((location, index) => (
            <FoodLocationCard key={index} {...location} />
          ))}
        </div>
      </div>
    );
  };

export default FoodDiscount;