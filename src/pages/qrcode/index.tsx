import React from 'react';
import QRCode from 'qrcode';
import { Button, Input, Image, Card, Row, Col, Space } from 'antd';
import './index.less';

const IMG_WIDTH = 300;

const setMurl = (code: string) =>
  `http://higo-test.flycua.com/hh/#/codeExchange?code=${code}`;

const setWxUrl = (code: string) => {
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe915baadd0e41b07&redirect_uri=${encodeURIComponent(
    setMurl(code)
  )}&response_type=code&scope=snsapi_base&state=1`;
};

/** 扫码兑换 */
export default function QRcode() {
  const [imgUrl, setImgUrl] = React.useState<[string, string]>();
  const [code, setCode] = React.useState('');

  const getUrl = async () => {
    if (!code) {
      return;
    }
    const mUrl = await QRCode.toDataURL(setMurl(code));
    const wxUrl = await QRCode.toDataURL(setWxUrl(code));

    setImgUrl([mUrl, wxUrl]);
  };

  return (
    <div className="qrcode-page">
      <Space>
        <Input
          placeholder="请输入兑换码"
          value={code}
          onChange={(event) => {
            setCode(event.target.value);
          }}
        />
        <Button onClick={getUrl}>生成二维码</Button>
      </Space>

      <div className="qrcode-page__images">
        {imgUrl ? (
          <div>
            <Row gutter={30}>
              <Col span={12}>
                <Card title="网页二维码">
                  <Image width={IMG_WIDTH} src={imgUrl[0]} />
                </Card>
              </Col>
              <Col span={12}>
                <Card title="微信公众号二维码">
                  <Image width={IMG_WIDTH} src={imgUrl[1]} />
                </Card>
              </Col>
            </Row>
          </div>
        ) : null}
      </div>
    </div>
  );
}
