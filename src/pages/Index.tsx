import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedMaterial, setSelectedMaterial] = useState('granite');
  const [complexity, setComplexity] = useState([3]);
  
  const materials = {
    granite: { name: 'Гранит', price: 25000, description: 'Долговечный натуральный камень' },
    marble: { name: 'Мрамор', price: 35000, description: 'Элегантный мрамор с благородной текстурой' },
    gabro: { name: 'Габбро', price: 20000, description: 'Прочный чёрный камень' }
  };

  const calculatePrice = () => {
    const basePrica = materials[selectedMaterial as keyof typeof materials].price;
    const complexityMultiplier = 1 + (complexity[0] - 1) * 0.3;
    return Math.round(basePrica * complexityMultiplier);
  };

  const monuments = [
    {
      id: 1,
      title: 'Классический крест',
      material: 'Гранит',
      price: '25 000 ₽',
      image: 'img/f4366c97-ecdc-4e12-bcec-a1cbaa25ad4c.jpg'
    },
    {
      id: 2,
      title: 'Мраморный памятник с розой',
      material: 'Мрамор',
      price: '35 000 ₽',
      image: 'img/6245d65e-8930-4455-b726-640e447286ad.jpg'
    },
    {
      id: 3,
      title: 'Плита с венком',
      material: 'Габбро',
      price: '20 000 ₽',
      image: 'img/01f15b7d-7fd4-4f10-95bf-8f9300417a28.jpg'
    }
  ];

  const services = [
    { icon: 'Hammer', title: 'Изготовление', description: 'Создаём памятники по индивидуальным проектам' },
    { icon: 'Truck', title: 'Доставка', description: 'Бережная доставка в любую точку города' },
    { icon: 'Settings', title: 'Установка', description: 'Профессиональная установка на кладбище' },
    { icon: 'Shield', title: 'Гарантия', description: 'Гарантия качества на все виды работ' }
  ];

  return (
    <div className="min-h-screen bg-background font-roboto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Cross" size={28} className="text-memorial-dark" />
              <h1 className="text-2xl font-cormorant font-semibold text-memorial-dark">
                Мемориал
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-muted-foreground hover:text-primary transition-colors">
                Каталог
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#calculator" className="text-muted-foreground hover:text-primary transition-colors">
                Калькулятор
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                О нас
              </a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">
                Контакты
              </a>
            </div>
            <Button className="bg-memorial-dark hover:bg-memorial-light">
              <Icon name="Phone" size={16} className="mr-2" />
              Звонок
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-cormorant font-semibold text-memorial-dark mb-6">
            Достойная память
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Создаём памятники и надгробия с уважением к традициям и памяти ваших близких. 
            Качественные материалы, индивидуальный подход, гарантия на все работы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-memorial-dark hover:bg-memorial-light">
              <Icon name="Catalogue" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="border-memorial-dark text-memorial-dark hover:bg-memorial-dark hover:text-white">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cormorant font-semibold text-memorial-dark mb-4">
              Наши услуги
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный цикл работ — от проектирования до установки памятника
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-memorial-dark/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={28} className="text-memorial-dark" />
                  </div>
                  <CardTitle className="font-cormorant text-memorial-dark">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cormorant font-semibold text-memorial-dark mb-4">
              Каталог памятников
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор памятников из различных материалов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monuments.map((monument) => (
              <Card key={monument.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={monument.image} 
                    alt={monument.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-cormorant text-memorial-dark mb-2">
                        {monument.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mb-2">
                        {monument.material}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-memorial-bronze">
                        {monument.price}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-memorial-dark hover:bg-memorial-light">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cormorant font-semibold text-memorial-dark mb-4">
              Калькулятор стоимости
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Рассчитайте примерную стоимость памятника
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant text-memorial-dark">
                  Параметры памятника
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Материал
                  </label>
                  <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(materials).map(([key, material]) => (
                        <SelectItem key={key} value={key}>
                          <div>
                            <div className="font-medium">{material.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {material.description}
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Сложность работ: {complexity[0]}
                  </label>
                  <Slider
                    value={complexity}
                    onValueChange={setComplexity}
                    max={5}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Простая</span>
                    <span>Сложная</span>
                  </div>
                </div>

                <Separator />

                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-cormorant font-semibold text-memorial-dark">
                        Примерная стоимость
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {materials[selectedMaterial as keyof typeof materials].name}, сложность {complexity[0]}
                      </p>
                    </div>
                    <div className="text-2xl font-bold text-memorial-bronze">
                      {calculatePrice().toLocaleString()} ₽
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-memorial-dark hover:bg-memorial-light">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Получить консультацию
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-memorial-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Cross" size={24} className="text-white" />
                <h3 className="text-xl font-cormorant font-semibold">Мемориал</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Достойные памятники для сохранения памяти о ваших близких
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Изготовление памятников</li>
                <li>Установка и монтаж</li>
                <li>Доставка</li>
                <li>Реставрация</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Материалы</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Гранит</li>
                <li>Мрамор</li>
                <li>Габбро</li>
                <li>Песчаник</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@memorial.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Мира, 15</span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-slate-600" />
          <div className="text-center text-sm text-slate-400">
            © 2024 Мемориал. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;