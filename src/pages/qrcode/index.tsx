import React from 'react';
import QRCode from 'qrcode';
import { Button, Input, Image, Card, Row, Col } from 'antd';

export default function QRcode() {
  const [imgUrl, setImgUrl] = React.useState<[string, string]>();
  const [url, setUrl] = React.useState('');

  const getUrl = async () => {
    if (!url) {
      return;
    }
    const mUrl = await QRCode.toDataURL(url);
    const wxUrl = await QRCode.toDataURL(url);

    setImgUrl([mUrl, wxUrl]);
  };

  return (
    <div>
      <Input.TextArea
        value={url}
        onChange={(event) => {
          setUrl(event.target.value);
        }}
      />
      <Button onClick={getUrl}>生成二维码</Button>

      {imgUrl ? (
        <div>
          <Row gutter={30}>
            <Col span={12}>
              <Card title="网页二维码">
                <Image src={imgUrl[0]} />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="微信公众号二维码">
                <Image src={imgUrl[1]} />
              </Card>
            </Col>
          </Row>
        </div>
      ) : null}
    </div>
  );
}
