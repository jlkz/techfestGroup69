import React, {useState} from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, Card, Col, Row } from 'antd';
import OpenAI from 'openai';


const { Dragger } = Upload;

const ImageCaption = () => {
  const [captions, setCaptions] = useState([]);


  const getFunnyCaption = async (imageDescription) => {

    const openai = new OpenAI({
      apiKey: `${process.env.REACT_APP_OPEN_AI_API_KEY}`,
      dangerouslyAllowBrowser: true
    });

    const agent = {
      role: "system",
      content: 'You are  Humor Caption Generator, where you will generate 3 funny captions (json format, { "caption":["caption1","caption2","caption3"]}) for images that will be posted on social media based on provided descriptions'
    };

    const imageDesc = {
      role: "user",
      content: imageDescription
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [agent, imageDesc],
      "max_tokens": 300
    });
    console.log(response.choices[0].message.content);

    try {
      // Parse the JSON content
      const captionsArray = JSON.parse(response.choices[0].message.content).caption;
      return captionsArray;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return [];
    }
  };



  const query = async (base64Image) => {
    // Include your logic for sending the base64 image to the API here
    console.log(base64Image);

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/nlpconnect/vit-gpt2-image-captioning",
        {
          headers: { Authorization: "Bearer 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" },
          method: "POST",
          body: JSON.stringify({ image: base64Image }), // Send the base64 image as JSON data
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        
        // Convert the uploaded image to base64
        const reader = new FileReader();
        reader.onload = async () => {
          const base64Image = reader.result.split(",")[1];
  
          const result = await query(base64Image);
          const captionsArray = await getFunnyCaption(result[0].generated_text);
          setCaptions(captionsArray);
        };
        reader.readAsDataURL(info.file.originFileObj);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <div>
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
        banned files.
      </p>
    </Dragger>

    {captions.length > 0 && (
      <div style={{ marginTop: "20px" }}>
        <h2>Funny Captions:</h2>
        <Row gutter={16}>
        {captions.map((caption, index) => (
          <Col span={8}>
            <Card title={`Caption ${index + 1}`} bordered={false}>
              {caption}
            </Card>
          
          </Col>
        ))}
        </Row>
      </div>
    )}
    </div>
  );
};

export default ImageCaption;











