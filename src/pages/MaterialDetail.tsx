import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Play, Volume2 } from "lucide-react";
import { useState } from "react";
import pinyinImage from "@/assets/pinyin-lesson.jpg";
import greetingsImage from "@/assets/greetings-lesson.jpg";
import numbersImage from "@/assets/numbers-lesson.jpg";

interface MaterialContent {
  title: string;
  image: string;
  description: string;
  content: {
    introduction: string;
    mainContent: {
      subtitle: string;
      items: Array<{
        chinese?: string;
        pinyin: string;
        meaning: string;
        audio?: string;
      }>;
    }[];
    tips: string[];
  };
}

const MaterialDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const materials: { [key: string]: MaterialContent } = {
    pinyin: {
      title: "Pengenalan Huruf Pinyin",
      image: pinyinImage,
      description: "Pelajari sistem romanisasi Pinyin untuk membantu pengucapan bahasa Mandarin",
      content: {
        introduction: "Pinyin adalah sistem romanisasi resmi untuk bahasa Mandarin Standar. Sistem ini menggunakan alfabet Latin untuk menunjukkan bagaimana karakter Cina diucapkan.",
        mainContent: [
          {
            subtitle: "Konsonan Dasar",
            items: [
              { pinyin: "b", meaning: "seperti 'b' dalam 'buku'" },
              { pinyin: "p", meaning: "seperti 'p' dalam 'pulau'" },
              { pinyin: "m", meaning: "seperti 'm' dalam 'mata'" },
              { pinyin: "f", meaning: "seperti 'f' dalam 'foto'" },
              { pinyin: "d", meaning: "seperti 'd' dalam 'dalam'" },
              { pinyin: "t", meaning: "seperti 't' dalam 'tamu'" },
            ]
          },
          {
            subtitle: "Vokal Dasar",
            items: [
              { pinyin: "a", meaning: "seperti 'a' dalam 'api'" },
              { pinyin: "o", meaning: "seperti 'o' dalam 'foto'" },
              { pinyin: "e", meaning: "seperti 'e' dalam 'enak'" },
              { pinyin: "i", meaning: "seperti 'i' dalam 'ikan'" },
              { pinyin: "u", meaning: "seperti 'u' dalam 'ular'" },
              { pinyin: "ü", meaning: "seperti 'u' dalam bahasa Perancis 'tu'" },
            ]
          }
        ],
        tips: [
          "Latih pengucapan dengan mendengarkan audio berkali-kali",
          "Perhatikan perbedaan antara konsonan aspirated (bernapas) dan non-aspirated",
          "Gunakan nada yang tepat - Mandarin memiliki 4 nada dasar",
          "Praktikkan dengan kata-kata sederhana terlebih dahulu"
        ]
      }
    },
    salam: {
      title: "Salam dalam Mandarin",
      image: greetingsImage,
      description: "Kuasai berbagai cara menyapa dan berkenalan dalam bahasa Mandarin",
      content: {
        introduction: "Salam adalah hal pertama yang perlu dipelajari dalam bahasa apa pun. Mari pelajari berbagai cara menyapa dalam bahasa Mandarin.",
        mainContent: [
          {
            subtitle: "Salam Dasar",
            items: [
              { chinese: "你好", pinyin: "Nǐ hǎo", meaning: "Halo (formal)" },
              { chinese: "您好", pinyin: "Nín hǎo", meaning: "Halo (sangat formal)" },
              { chinese: "嗨", pinyin: "Hāi", meaning: "Hai (informal)" },
              { chinese: "早上好", pinyin: "Zǎoshang hǎo", meaning: "Selamat pagi" },
              { chinese: "下午好", pinyin: "Xiàwǔ hǎo", meaning: "Selamat siang" },
              { chinese: "晚上好", pinyin: "Wǎnshang hǎo", meaning: "Selamat malam" },
            ]
          },
          {
            subtitle: "Perkenalan Diri",
            items: [
              { chinese: "我叫...", pinyin: "Wǒ jiào...", meaning: "Nama saya..." },
              { chinese: "我是...", pinyin: "Wǒ shì...", meaning: "Saya adalah..." },
              { chinese: "很高兴认识你", pinyin: "Hěn gāoxìng rènshi nǐ", meaning: "Senang berkenalan dengan Anda" },
              { chinese: "请多指教", pinyin: "Qǐng duō zhǐjiào", meaning: "Mohon bimbingannya" },
            ]
          }
        ],
        tips: [
          "Gunakan 您好 (Nín hǎo) untuk orang yang lebih tua atau dalam situasi formal",
          "你好 (Nǐ hǎo) dapat digunakan kapan saja dan kepada siapa saja",
          "Tambahkan 吗 (ma) di akhir kalimat untuk membuat pertanyaan",
          "Perhatikan nada saat mengucapkan - nada yang salah bisa mengubah arti"
        ]
      }
    },
    angka: {
      title: "Angka 1-10",
      image: numbersImage,
      description: "Belajar menghitung dan menggunakan angka dalam kehidupan sehari-hari",
      content: {
        introduction: "Angka adalah fondasi penting dalam belajar bahasa Mandarin. Mari pelajari angka 1-10 beserta penggunaannya.",
        mainContent: [
          {
            subtitle: "Angka Dasar 1-10",
            items: [
              { chinese: "一", pinyin: "yī", meaning: "satu" },
              { chinese: "二", pinyin: "èr", meaning: "dua" },
              { chinese: "三", pinyin: "sān", meaning: "tiga" },
              { chinese: "四", pinyin: "sì", meaning: "empat" },
              { chinese: "五", pinyin: "wǔ", meaning: "lima" },
              { chinese: "六", pinyin: "liù", meaning: "enam" },
              { chinese: "七", pinyin: "qī", meaning: "tujuh" },
              { chinese: "八", pinyin: "bā", meaning: "delapan" },
              { chinese: "九", pinyin: "jiǔ", meaning: "sembilan" },
              { chinese: "十", pinyin: "shí", meaning: "sepuluh" },
            ]
          },
          {
            subtitle: "Penggunaan Praktis",
            items: [
              { chinese: "几个?", pinyin: "Jǐ gè?", meaning: "Berapa buah?" },
              { chinese: "多少钱?", pinyin: "Duōshao qián?", meaning: "Berapa harganya?" },
              { chinese: "第一", pinyin: "dì yī", meaning: "yang pertama" },
              { chinese: "一个", pinyin: "yī gè", meaning: "satu buah" },
            ]
          }
        ],
        tips: [
          "二 (èr) digunakan untuk menghitung, 两 (liǎng) digunakan dengan classifier",
          "Angka 4 (四 sì) dihindari karena bunyi mirip dengan 死 (sǐ) yang berarti mati",
          "Angka 8 (八 bā) dianggap beruntung karena bunyi mirip dengan 发 (fā) yang berarti makmur",
          "Latih pengucapan nada dengan baik, terutama untuk angka 1, 2, dan 7"
        ]
      }
    }
  };

  const currentMaterial = materials[id || ''];

  if (!currentMaterial) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Materi tidak ditemukan</h1>
          <Button onClick={() => navigate('/')}>Kembali ke Beranda</Button>
        </div>
      </div>
    );
  }

  const playAudio = (text: string) => {
    setIsPlaying(text);
    // Simulate audio playing
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.8;
      utterance.onend = () => setIsPlaying(null);
      speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlaying(null), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Daftar Materi
          </Button>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {currentMaterial.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {currentMaterial.description}
              </p>
            </div>
            <div className="md:col-span-1">
              <img
                src={currentMaterial.image}
                alt={currentMaterial.title}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pengantar</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">
              {currentMaterial.content.introduction}
            </p>
          </CardContent>
        </Card>

        {/* Main Content */}
        {currentMaterial.content.mainContent.map((section, index) => (
          <Card key={index} className="mb-8">
            <CardHeader>
              <CardTitle>{section.subtitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between p-4 bg-accent/20 rounded-lg border border-accent hover:bg-accent/30 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        {item.chinese && (
                          <span className="text-2xl font-bold text-primary">
                            {item.chinese}
                          </span>
                        )}
                        <div>
                          <div className="text-lg font-medium text-foreground">
                            {item.pinyin}
                          </div>
                          <div className="text-muted-foreground">
                            {item.meaning}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => playAudio(item.pinyin)}
                      className="ml-4 flex items-center gap-2"
                      disabled={isPlaying === item.pinyin}
                    >
                      {isPlaying === item.pinyin ? (
                        <Volume2 className="h-4 w-4 animate-pulse text-primary" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                      {isPlaying === item.pinyin ? 'Playing...' : 'Dengar'}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              💡 Tips Pembelajaran
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {currentMaterial.content.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => navigate('/')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
          >
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MaterialDetail;