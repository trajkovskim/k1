import { Form } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Breadcrumb, Button, Container, FormItem, Input, Text, Textarea, Title } from 'components/common';
import { EmailButton, TelephoneButton } from 'components/layout';
import { useSocialMedias, useTranslation } from 'hooks';
import { PAGE_MAX_WIDTH } from 'pages/constants';
import React from 'react';
import { goto, mailTo } from 'utils';

type ContactForm = {
  name?: string;
  subject?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const Contact: React.FC = () => {
  const t = useTranslation('contact');
  const tBase = useTranslation();
  const socialMedias = useSocialMedias();
  const [form] = useForm<ContactForm>();

  const email = tBase('email');

  const handleSend = (values: ContactForm) => {
    if (!values.subject || !values.message) {
      return;
    }

    let body = '';

    if (values.name) {
      body += `${t('giveUsAMessage.nameInput.placeholder')}: ${values.name}\n\r`;
    }

    if (values.email) {
      body += `${t('giveUsAMessage.emailInput.placeholder')}: ${values.email}\n\r`;
    }

    if (values.phone) {
      body += `${t('giveUsAMessage.phoneInput.placeholder')}: ${values.phone}\n\r`;
    }

    if (values.message) {
      body += `${t('giveUsAMessage.messageInput.placeholder')}: ${values.message}\n\r`;
    }

    mailTo(email, { subject: values.subject, body: encodeURIComponent(body) });
  };

  return (
    <Container
      xs={PAGE_MAX_WIDTH}
      styleConfig={{ centered: true, gap: '2rem', padding: { top: 'xl', bottom: 'xl', left: 'md', right: 'md' } }}
      lgStyle={{ gap: '3rem' }}
    >
      <Container
        styleConfig={{ gap: '1rem' }}
        lgStyle={{ gap: '6.5rem', direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Container xs={12} lg={4} lgStyle={{ order: 2 }}>
          <Breadcrumb />
        </Container>
        <Container xs={12} lg={8} lgStyle={{ order: 1 }}>
          <Title level={2} title={t('title')} />
        </Container>
      </Container>

      <Container styleConfig={{ gap: '4rem', direction: 'row', wrap: true, alignItems: 'start' }}>
        <Container xs={12} lg={8} styleConfig={{ gap: '2rem' }}>
          <Title
            level={3}
            title={t('giveUsAMessage.title')}
            description={t('giveUsAMessage.description')}
            size={{ title: 'xl', description: 'md' }}
          />
          <Form form={form} onFinish={handleSend}>
            <Container styleConfig={{ gap: '1rem' }}>
              <Container styleConfig={{ wrap: true, direction: 'row', gap: '1rem' }}>
                <Container xs={12} md={6}>
                  <FormItem name="name">
                    <Input name="name" size="lg" fullwidth placeholder={t('giveUsAMessage.nameInput.placeholder')} />
                  </FormItem>
                </Container>
                <Container xs={12} md={6}>
                  <FormItem name="email">
                    <Input
                      type="email"
                      name="email"
                      size="lg"
                      fullwidth
                      placeholder={t('giveUsAMessage.emailInput.placeholder')}
                    />
                  </FormItem>
                </Container>
                <Container xs={12} md={6}>
                  <FormItem name="phone">
                    <Input
                      type="tel"
                      name="phone"
                      size="lg"
                      fullwidth
                      placeholder={t('giveUsAMessage.phoneInput.placeholder')}
                    />
                  </FormItem>
                </Container>
                <Container xs={12} md={6}>
                  <FormItem name="subject">
                    <Input
                      name="subject"
                      size="lg"
                      fullwidth
                      placeholder={t('giveUsAMessage.subjectInput.placeholder')}
                    />
                  </FormItem>
                </Container>
              </Container>
              <Container>
                <FormItem name="message">
                  <Textarea
                    name="message"
                    size="lg"
                    fullwidth
                    rows={10}
                    placeholder={t('giveUsAMessage.messageInput.placeholder')}
                  />
                </FormItem>
              </Container>
              <Container styleConfig={{ alignSelf: 'end' }}>
                <FormItem>
                  <Button htmlType="submit" type="primary" size="lg">
                    {t('giveUsAMessage.sendMessageButton')}
                  </Button>
                </FormItem>
              </Container>
            </Container>
          </Form>
        </Container>
        <Container style={{ position: 'sticky', top: 100 }} xs={12} lg={4} styleConfig={{ gap: '2rem' }}>
          <Container styleConfig={{ gap: '1rem' }}>
            <Text size="lg" strong>
              {t('contacts.title')}
            </Text>
            <TelephoneButton label />
            <EmailButton label />
          </Container>
          <Container styleConfig={{ gap: '1rem' }}>
            <Text size="lg" strong>
              {t('socialMedia.title')}
            </Text>
            <Container styleConfig={{ gap: '1rem', direction: 'row' }}>
              {socialMedias.map((socialMedia, index) => (
                <Button
                  key={index}
                  title={socialMedia.href}
                  icon={socialMedia.icon}
                  type="link"
                  size="lg"
                  onClick={() => goto(socialMedia.href)}
                />
              ))}
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Contact;
