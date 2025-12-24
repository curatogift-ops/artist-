export interface Artwork {
    id: string;
    filename: string;
    title: string;
    description: string;
    category: string;
    style: string;
    colors: string[];
    mood: string;
    price: number;
}

export const artworks: Artwork[] = [
    {
        id: "1",
        filename: "0477f3cd-a004-4454-b178-7282f41cd574.jpg",
        title: "Ethereal Forest Spirit",
        description: "A mystical portrait of a young woman adorned with delicate white flowers and soft pink blossoms in her flowing hair. Her serene expression and gentle gaze create an enchanting connection with nature, while the soft lighting and dreamy atmosphere evoke a sense of otherworldly beauty. The intricate floral crown and natural elements suggest a guardian of the woodland realm.",
        category: "Fantasy Portrait",
        style: "Digital Fantasy Art",
        colors: ["soft pink", "cream white", "gentle green", "warm beige"],
        mood: "Serene and Enchanting",
        price: 3
    },
    {
        id: "2",
        filename: "04df770e-2d6e-4f78-88ad-a14be1059cc0.jpg",
        title: "Autumn's Golden Embrace",
        description: "A captivating portrait featuring warm autumn tones and golden hour lighting that bathes the subject in a soft, romantic glow. The woman's contemplative expression and the rich amber and orange hues create a cozy, nostalgic atmosphere. Delicate details in the lighting and color palette evoke the warmth and beauty of fall season.",
        category: "Portrait",
        style: "Contemporary Digital Portrait",
        colors: ["golden amber", "warm orange", "soft brown", "cream"],
        mood: "Warm and Contemplative",
        price: 3
    },
    {
        id: "3",
        filename: "0761c100-a5e4-4cb2-a1c2-d066b1bd415c.jpg",
        title: "Crimson Elegance",
        description: "A striking portrait showcasing dramatic red tones and sophisticated composition. The subject's elegant pose and the rich crimson palette create a bold, confident atmosphere. The interplay of light and shadow adds depth and dimension, while the warm color scheme conveys passion and strength.",
        category: "Portrait",
        style: "Contemporary Digital Art",
        colors: ["deep crimson", "warm red", "soft peach", "burgundy"],
        mood: "Bold and Confident",
        price: 3
    },
    {
        id: "4",
        filename: "0ba83c92-5b02-4fd3-b1ef-fbffb94635a0.jpg",
        title: "Sunset Reverie",
        description: "A dreamy portrait bathed in the warm glow of golden hour, featuring soft peachy tones and gentle lighting. The subject's peaceful expression and the ethereal quality of the light create a moment of quiet reflection. The harmonious blend of warm colors and soft focus evokes a sense of tranquility and inner peace.",
        category: "Portrait",
        style: "Soft Focus Digital Art",
        colors: ["peach", "golden yellow", "soft orange", "cream"],
        mood: "Peaceful and Dreamy",
        price: 3
    },
    {
        id: "5",
        filename: "0e7d7591-cbf4-46d8-839e-106acc0e1eaa.jpg",
        title: "Moonlit Enchantress",
        description: "A mystical portrait featuring cool blue tones and ethereal lighting that creates a magical, moonlit atmosphere. The subject's serene expression and the soft blue palette evoke a sense of mystery and otherworldly beauty. Delicate details and the dreamy quality of the light suggest a connection to lunar magic and nighttime enchantment.",
        category: "Fantasy Portrait",
        style: "Fantasy Digital Art",
        colors: ["soft blue", "lavender", "silver", "pale turquoise"],
        mood: "Mystical and Serene",
        price: 3
    },
    {
        id: "6",
        filename: "0f5db982-133d-4864-ac2c-f5064d19a24f.jpg",
        title: "Rose Garden Dreams",
        description: "An enchanting portrait surrounded by lush pink roses and delicate floral elements. The romantic composition and soft pink palette create a fairytale-like atmosphere, while the subject's gentle expression adds to the dreamy quality. The abundance of flowers and the soft, diffused lighting evoke the beauty of a secret garden in full bloom.",
        category: "Fantasy Portrait",
        style: "Romantic Digital Art",
        colors: ["soft pink", "rose", "cream", "gentle green"],
        mood: "Romantic and Dreamy",
        price: 3
    },
    {
        id: "7",
        filename: "1184b2f2-d19d-4811-82f0-0ca5cf8c0f17.jpg",
        title: "Coastal Serenity",
        description: "A peaceful portrait featuring cool, coastal tones and a calm, contemplative mood. The soft blue and teal palette evokes the tranquility of the ocean, while the subject's serene expression creates a sense of inner peace. The gentle lighting and harmonious colors suggest a moment of quiet reflection by the sea.",
        category: "Portrait",
        style: "Contemporary Digital Art",
        colors: ["soft teal", "ocean blue", "cream", "pale aqua"],
        mood: "Calm and Tranquil",
        price: 3
    },
    {
        id: "8",
        filename: "1b4faaf1-902e-45c8-a90d-023cd34df1f1.jpg",
        title: "Warrior's Resolve",
        description: "A powerful portrait featuring strong, determined features and a confident gaze. The dramatic lighting and bold composition create a sense of strength and resilience. The subject's intense expression and the dynamic use of light and shadow convey determination and inner power, suggesting a warrior's spirit.",
        category: "Character Portrait",
        style: "Digital Character Art",
        colors: ["warm brown", "golden", "deep shadow", "amber"],
        mood: "Strong and Determined",
        price: 3
    },
    {
        id: "9",
        filename: "21450a94-fd0c-4926-835c-64899ae1636a.jpg",
        title: "Lavender Twilight",
        description: "A soft, romantic portrait bathed in gentle lavender and purple tones. The dreamy lighting and pastel palette create an ethereal, twilight atmosphere. The subject's peaceful expression and the harmonious blend of cool purples and soft pinks evoke the quiet beauty of dusk and the magic of the evening hour.",
        category: "Portrait",
        style: "Soft Digital Art",
        colors: ["lavender", "soft purple", "pink", "pale blue"],
        mood: "Ethereal and Romantic",
        price: 3
    },
    {
        id: "10",
        filename: "223c51e8-6896-48d5-8617-7c79a333e3d6.jpg",
        title: "Autumn Wanderer",
        description: "A contemplative portrait set against warm autumn tones and natural lighting. The subject's thoughtful expression and the rich, earthy palette create a sense of connection with the changing seasons. The warm browns and golden hues evoke the beauty of fall foliage and the introspective mood of autumn.",
        category: "Portrait",
        style: "Natural Light Digital Art",
        colors: ["warm brown", "golden", "amber", "rust"],
        mood: "Contemplative and Warm",
        price: 3
    },
    {
        id: "11",
        filename: "2a8cb4f6-6fcc-4ad8-894c-adb3cf669b85.jpg",
        title: "Gentle Spirit",
        description: "A tender portrait featuring soft, natural tones and gentle lighting. The subject's kind expression and the warm, neutral palette create an atmosphere of compassion and gentleness. The subtle use of light and the harmonious colors evoke a sense of inner peace and quiet strength.",
        category: "Portrait",
        style: "Soft Realism Digital Art",
        colors: ["soft beige", "warm cream", "gentle brown", "peach"],
        mood: "Gentle and Compassionate",
        price: 3
    },
    {
        id: "12",
        filename: "2b05f314-c381-4fda-abab-9624f0923ba2.jpg",
        title: "Coral Sunset Beauty",
        description: "A vibrant portrait featuring warm coral and peachy tones that capture the essence of a beautiful sunset. The subject's radiant expression and the glowing, warm palette create an uplifting and joyful atmosphere. The rich color saturation and soft lighting evoke the warmth and beauty of golden hour by the ocean.",
        category: "Portrait",
        style: "Vibrant Digital Art",
        colors: ["coral", "peach", "golden", "warm pink"],
        mood: "Joyful and Radiant",
        price: 3
    },
    {
        id: "13",
        filename: "2fdde0e4-1424-454c-822f-306f00a1e114.jpg",
        title: "Emerald Garden Muse",
        description: "A lush, nature-inspired portrait featuring rich green tones and botanical elements. The subject appears harmoniously integrated with verdant foliage and natural beauty. The deep greens and organic composition create a sense of growth, vitality, and connection to the natural world, evoking a garden paradise.",
        category: "Fantasy Portrait",
        style: "Nature-Inspired Digital Art",
        colors: ["emerald green", "forest green", "soft cream", "golden"],
        mood: "Vibrant and Natural",
        price: 3
    },
    {
        id: "14",
        filename: "32bb0d6d-062d-4408-806c-f6625978474c.jpg",
        title: "Desert Rose",
        description: "A warm, sun-kissed portrait featuring earthy desert tones and natural beauty. The subject's serene expression and the warm, sandy palette evoke the timeless beauty of desert landscapes. The golden and terracotta hues create a sense of warmth and connection to ancient, sun-baked lands.",
        category: "Portrait",
        style: "Warm Tones Digital Art",
        colors: ["terracotta", "sandy beige", "warm gold", "rust"],
        mood: "Warm and Timeless",
        price: 3
    },
    {
        id: "15",
        filename: "34461902-cf33-4ba9-9d8e-186b6ce08b6b.jpg",
        title: "Quiet Strength",
        description: "A powerful yet gentle portrait showcasing inner strength and calm determination. The subject's composed expression and the balanced use of light and shadow create a sense of quiet confidence. The natural tones and subtle details convey resilience and grace under pressure.",
        category: "Character Portrait",
        style: "Realistic Digital Art",
        colors: ["natural brown", "soft beige", "warm tan", "cream"],
        mood: "Strong and Composed",
        price: 3
    },
    {
        id: "16",
        filename: "38be5b20-52e7-4a6c-9702-48a9742be46e.jpg",
        title: "Sapphire Dreams",
        description: "A mesmerizing portrait featuring deep blue tones and a dreamy, ethereal quality. The rich sapphire palette and soft lighting create a sense of depth and mystery. The subject's contemplative gaze and the cool, jewel-toned colors evoke the beauty of deep ocean waters and starlit skies.",
        category: "Fantasy Portrait",
        style: "Fantasy Digital Art",
        colors: ["sapphire blue", "deep navy", "soft cyan", "silver"],
        mood: "Mysterious and Dreamy",
        price: 3
    },
    {
        id: "17",
        filename: "3ad101c3-d2a5-4aee-ac12-18524eae98be.jpg",
        title: "Golden Hour Glow",
        description: "A radiant portrait bathed in the warm, golden light of sunset. The subject's luminous expression and the rich golden palette create an atmosphere of warmth and optimism. The beautiful interplay of light and the warm color scheme capture the magical quality of the golden hour.",
        category: "Portrait",
        style: "Golden Hour Digital Art",
        colors: ["golden yellow", "warm amber", "soft orange", "cream"],
        mood: "Radiant and Optimistic",
        price: 3
    },
    {
        id: "18",
        filename: "41fceee9-bbdc-4cba-a6dc-178b1e0666e3.jpg",
        title: "Celestial Beauty",
        description: "An ethereal portrait featuring soft, celestial tones and a heavenly atmosphere. The delicate use of light and the dreamy, pastel palette create a sense of otherworldly beauty. The subject's serene expression and the soft, glowing quality evoke the gentle beauty of dawn and the magic of celestial realms.",
        category: "Fantasy Portrait",
        style: "Ethereal Digital Art",
        colors: ["soft pink", "pale blue", "cream", "lavender"],
        mood: "Ethereal and Heavenly",
        price: 3
    },
    {
        id: "19",
        filename: "45097ada-7411-4287-8faa-269e34a09142.jpg",
        title: "Amber Elegance",
        description: "A sophisticated portrait featuring rich amber tones and elegant composition. The warm, golden palette and refined lighting create an atmosphere of timeless elegance. The subject's poised expression and the luxurious color scheme evoke classic beauty and refined grace.",
        category: "Portrait",
        style: "Classic Digital Art",
        colors: ["amber", "golden brown", "warm honey", "cream"],
        mood: "Elegant and Refined",
        price: 3
    },
    {
        id: "20",
        filename: "49a0ab3c-84e3-40cc-8d41-eb3855c32e98.jpg",
        title: "Twilight Reverie",
        description: "A contemplative portrait set in the soft, fading light of twilight. The cool, dusky tones and gentle shadows create a peaceful, introspective atmosphere. The subject's thoughtful expression and the harmonious blend of purples and blues evoke the quiet beauty of evening and moments of deep reflection.",
        category: "Portrait",
        style: "Atmospheric Digital Art",
        colors: ["dusky purple", "soft blue", "lavender", "gray"],
        mood: "Contemplative and Peaceful",
        price: 3
    },
    {
        id: "21",
        filename: "5383478e-bd36-4afa-9f8b-e22fd6be1d8b.jpg",
        title: "Floral Crown Majesty",
        description: "A regal portrait featuring an elaborate crown of vibrant flowers and natural elements. The subject's noble bearing and the rich, colorful floral arrangement create a sense of natural royalty. The abundance of blooms and the harmonious composition evoke the majesty of nature and the beauty of botanical artistry.",
        category: "Fantasy Portrait",
        style: "Floral Fantasy Art",
        colors: ["vibrant pink", "soft purple", "green", "cream"],
        mood: "Regal and Natural",
        price: 3
    },
    {
        id: "22",
        filename: "5b3049ae-d3f3-4aff-85e0-d0b6f2e4a473.jpg",
        title: "Soft Morning Light",
        description: "A gentle portrait illuminated by the soft, diffused light of early morning. The delicate pastel tones and tender lighting create a sense of new beginnings and fresh hope. The subject's peaceful expression and the subtle color palette evoke the quiet beauty of dawn and the promise of a new day.",
        category: "Portrait",
        style: "Soft Light Digital Art",
        colors: ["soft peach", "pale pink", "cream", "gentle yellow"],
        mood: "Gentle and Hopeful",
        price: 3
    },
    {
        id: "23",
        filename: "5fbd2c1a-80fd-4666-ae4c-a0e24e4794a9.jpg",
        title: "Rustic Charm",
        description: "A warm, inviting portrait featuring earthy, rustic tones and natural beauty. The subject's approachable expression and the warm, earthy palette create a sense of comfort and authenticity. The natural lighting and organic color scheme evoke the simple beauty of countryside living and genuine warmth.",
        category: "Portrait",
        style: "Natural Digital Art",
        colors: ["warm brown", "rustic orange", "cream", "golden"],
        mood: "Warm and Authentic",
        price: 3
    },
    {
        id: "24",
        filename: "6471bc54-b8f4-4d16-8540-b10779679edf.jpg",
        title: "Gentle Breeze",
        description: "A soft, airy portrait capturing the feeling of a gentle breeze and natural movement. The light, flowing composition and delicate color palette create a sense of freedom and lightness. The subject's serene expression and the ethereal quality evoke the peaceful feeling of a warm summer breeze.",
        category: "Portrait",
        style: "Soft Digital Art",
        colors: ["soft cream", "pale blue", "gentle beige", "white"],
        mood: "Light and Peaceful",
        price: 3
    },
    {
        id: "25",
        filename: "6effc083-8410-4ac9-abfb-789a7f198fb4.jpg",
        title: "Natural Beauty",
        description: "A portrait celebrating natural, understated beauty with soft, neutral tones. The simple composition and gentle lighting create an atmosphere of authenticity and grace. The subject's genuine expression and the harmonious, natural palette evoke the timeless beauty of simplicity and truth.",
        category: "Portrait",
        style: "Natural Realism",
        colors: ["soft beige", "natural brown", "cream", "warm tan"],
        mood: "Authentic and Graceful",
        price: 3
    },
    {
        id: "26",
        filename: "6f17ac34-7931-466c-9b48-a6120f2d5fb5.jpg",
        title: "Quiet Confidence",
        description: "A composed portrait showcasing quiet confidence and inner strength. The balanced composition and natural tones create a sense of self-assurance and poise. The subject's calm, confident expression and the subtle use of light convey strength without aggression, grace without pretense.",
        category: "Character Portrait",
        style: "Contemporary Digital Art",
        colors: ["neutral brown", "soft gray", "warm beige", "cream"],
        mood: "Confident and Poised",
        price: 3
    },
    {
        id: "27",
        filename: "6ffd7188-c249-4d85-98d3-cb6ddeeae0c3.jpg",
        title: "Warm Embrace",
        description: "A tender portrait featuring warm, embracing tones that create a sense of comfort and safety. The soft, golden lighting and warm palette evoke feelings of love and protection. The subject's gentle expression and the cozy color scheme create an atmosphere of warmth and emotional connection.",
        category: "Portrait",
        style: "Warm Tones Digital Art",
        colors: ["warm gold", "soft orange", "cream", "peach"],
        mood: "Comforting and Loving",
        price: 3
    },
    {
        id: "28",
        filename: "7a1a849b-854e-4738-b3e3-70a355e585c3.jpg",
        title: "Peaceful Moment",
        description: "A serene portrait capturing a moment of perfect peace and tranquility. The soft, harmonious tones and gentle lighting create a meditative atmosphere. The subject's peaceful expression and the balanced composition evoke the beauty of stillness and the power of quiet moments.",
        category: "Portrait",
        style: "Serene Digital Art",
        colors: ["soft cream", "gentle beige", "pale pink", "warm white"],
        mood: "Peaceful and Meditative",
        price: 3
    },
    {
        id: "29",
        filename: "7d45f68e-4fcc-4daf-ac53-8cfa481128ce.jpg",
        title: "Sunset Warmth",
        description: "A glowing portrait bathed in the warm, rich tones of sunset. The vibrant orange and golden hues create an atmosphere of warmth and vitality. The subject's radiant expression and the intense, warm palette evoke the powerful beauty of the setting sun and the energy of golden hour.",
        category: "Portrait",
        style: "Vibrant Digital Art",
        colors: ["vibrant orange", "golden yellow", "warm red", "amber"],
        mood: "Vibrant and Energetic",
        price: 3
    },
    {
        id: "30",
        filename: "84146e9d-ee4f-4cce-9e78-fab178b99615.jpg",
        title: "Blossom Beauty",
        description: "A delicate portrait featuring soft floral elements and spring-like freshness. The gentle pink tones and floral accents create a sense of renewal and natural beauty. The subject's soft expression and the fresh, blooming palette evoke the beauty of spring gardens and new growth.",
        category: "Portrait",
        style: "Floral Digital Art",
        colors: ["soft pink", "gentle green", "cream", "pale yellow"],
        mood: "Fresh and Renewing",
        price: 3
    },
    {
        id: "31",
        filename: "873cbd03-0c9c-4050-98f8-8edcfdda7b8a.jpg",
        title: "Earthy Elegance",
        description: "A sophisticated portrait featuring rich, earthy tones and natural elegance. The warm browns and organic palette create a sense of grounded beauty and timeless style. The subject's refined expression and the harmonious earth tones evoke the elegance of natural materials and organic beauty.",
        category: "Portrait",
        style: "Earth Tones Digital Art",
        colors: ["rich brown", "warm tan", "cream", "golden"],
        mood: "Grounded and Elegant",
        price: 3
    },
    {
        id: "32",
        filename: "885cf7bb-7dc4-4f2b-ade8-9b196af6f4d9.jpg",
        title: "Rosy Glow",
        description: "A luminous portrait featuring soft rosy tones and a healthy, radiant glow. The warm pink palette and gentle lighting create an atmosphere of vitality and beauty. The subject's glowing expression and the fresh, rosy colors evoke the natural flush of health and the beauty of youth.",
        category: "Portrait",
        style: "Soft Glow Digital Art",
        colors: ["rosy pink", "soft peach", "cream", "warm white"],
        mood: "Radiant and Vital",
        price: 3
    },
    {
        id: "33",
        filename: "90c6ab81-08ad-48f5-bdbf-91d5c7aa499c.jpg",
        title: "Gentle Soul",
        description: "A tender portrait showcasing gentleness and kindness through soft features and warm tones. The delicate composition and gentle lighting create an atmosphere of compassion and empathy. The subject's kind expression and the soft, warm palette evoke the beauty of a gentle spirit and caring heart.",
        category: "Portrait",
        style: "Soft Portrait Art",
        colors: ["soft beige", "warm cream", "gentle pink", "pale yellow"],
        mood: "Kind and Compassionate",
        price: 3
    },
    {
        id: "34",
        filename: "91e5bfc9-c848-47e7-9af7-b85af7cfe28a.jpg",
        title: "Warm Afternoon",
        description: "A cozy portrait bathed in the warm light of a lazy afternoon. The golden, honey-toned palette and soft lighting create a sense of comfort and relaxation. The subject's content expression and the warm, inviting colors evoke the peaceful feeling of a warm afternoon spent in comfort.",
        category: "Portrait",
        style: "Warm Light Digital Art",
        colors: ["honey gold", "warm amber", "soft cream", "golden brown"],
        mood: "Cozy and Relaxed",
        price: 3
    },
    {
        id: "35",
        filename: "9513a4cf-c545-4724-90a5-f3d2edd63ea8.jpg",
        title: "Natural Grace",
        description: "A portrait celebrating natural grace and effortless beauty. The soft, neutral tones and balanced composition create a sense of harmony and ease. The subject's graceful expression and the understated palette evoke the beauty of natural elegance and authentic charm.",
        category: "Portrait",
        style: "Natural Digital Art",
        colors: ["soft tan", "cream", "gentle beige", "warm white"],
        mood: "Graceful and Harmonious",
        price: 3
    },
    {
        id: "36",
        filename: "95afc788-bf2a-403a-be9d-28f62ac3be96.jpg",
        title: "Coral Sunset",
        description: "A vibrant portrait featuring beautiful coral and sunset tones. The warm, peachy palette and glowing lighting create an atmosphere of warmth and beauty. The subject's radiant expression and the rich coral hues evoke the stunning colors of a tropical sunset over calm waters.",
        category: "Portrait",
        style: "Vibrant Sunset Art",
        colors: ["coral", "peachy pink", "golden", "warm orange"],
        mood: "Warm and Beautiful",
        price: 3
    },
    {
        id: "37",
        filename: "9d98e07c-3fdf-4180-a337-179a2bae7171.jpg",
        title: "Soft Whisper",
        description: "A delicate portrait with an almost whispered quality, featuring ultra-soft tones and gentle lighting. The ethereal composition and pale palette create a sense of quiet intimacy and tender moments. The subject's gentle expression and the soft, muted colors evoke the feeling of a soft whisper or gentle secret.",
        category: "Portrait",
        style: "Soft Focus Art",
        colors: ["pale cream", "soft white", "gentle beige", "whisper pink"],
        mood: "Intimate and Tender",
        price: 3
    },
    {
        id: "38",
        filename: "a23f02e3-d3f0-442c-add7-1916a084728a.jpg",
        title: "Autumn's Touch",
        description: "A warm portrait touched by the colors of autumn. The rich, fall-inspired palette and warm lighting create a sense of seasonal beauty and change. The subject's contemplative expression and the warm, earthy tones evoke the nostalgic beauty of autumn days and changing leaves.",
        category: "Portrait",
        style: "Seasonal Digital Art",
        colors: ["autumn orange", "warm brown", "golden", "rust"],
        mood: "Nostalgic and Warm",
        price: 3
    },
    {
        id: "39",
        filename: "a550e37b-ef61-42bc-9f9b-6cde31163094.jpg",
        title: "Quiet Reflection",
        description: "A contemplative portrait capturing a moment of quiet self-reflection. The soft, muted tones and gentle shadows create an introspective atmosphere. The subject's thoughtful expression and the calm, subdued palette evoke the peaceful solitude of personal reflection and inner dialogue.",
        category: "Portrait",
        style: "Contemplative Art",
        colors: ["soft gray", "muted beige", "gentle brown", "cream"],
        mood: "Reflective and Introspective",
        price: 3
    },
    {
        id: "40",
        filename: "a6f488db-e490-4817-8a67-cd2e99c30ac6.jpg",
        title: "Enchanted Garden",
        description: "A magical portrait set within an enchanted garden of flowers and natural beauty. The lush, vibrant colors and abundant floral elements create a fairytale atmosphere. The subject's dreamy expression and the rich, colorful palette evoke the wonder of a secret garden filled with magic and natural splendor.",
        category: "Fantasy Portrait",
        style: "Fantasy Garden Art",
        colors: ["vibrant green", "soft pink", "purple", "golden"],
        mood: "Magical and Enchanting",
        price: 3
    },
    {
        id: "41",
        filename: "a83c5b78-cdfa-458b-bc19-f4e2f1e276e7.jpg",
        title: "Peachy Perfection",
        description: "A glowing portrait featuring beautiful peachy tones and soft, flattering light. The warm, peachy palette and gentle glow create an atmosphere of warmth and beauty. The subject's radiant expression and the harmonious peach hues evoke the soft beauty of ripe peaches and summer warmth.",
        category: "Portrait",
        style: "Soft Glow Art",
        colors: ["peach", "soft coral", "cream", "warm pink"],
        mood: "Radiant and Warm",
        price: 3
    },
    {
        id: "42",
        filename: "ac69e31b-2499-411d-a4d3-84f151485cc3.jpg",
        title: "Lavender Fields",
        description: "A dreamy portrait inspired by the soft beauty of lavender fields. The gentle purple and lavender tones create a romantic, peaceful atmosphere. The subject's serene expression and the soft, floral-inspired palette evoke the calming beauty of lavender fields swaying in a gentle breeze.",
        category: "Portrait",
        style: "Soft Romantic Art",
        colors: ["lavender", "soft purple", "pale pink", "cream"],
        mood: "Romantic and Calming",
        price: 3
    },
    {
        id: "43",
        filename: "aef50909-2835-46a1-b37e-6e2e4676400e.jpg",
        title: "Golden Radiance",
        description: "A luminous portrait radiating golden warmth and inner light. The rich golden tones and glowing lighting create an atmosphere of radiance and positivity. The subject's bright expression and the warm, golden palette evoke the feeling of sunshine, happiness, and inner glow.",
        category: "Portrait",
        style: "Radiant Digital Art",
        colors: ["golden yellow", "warm gold", "amber", "cream"],
        mood: "Radiant and Positive",
        price: 3
    },
    {
        id: "44",
        filename: "aff27acb-b9a3-4dfb-8c54-feb05b04769d.jpg",
        title: "Soft Serenity",
        description: "A peaceful portrait embodying pure serenity and calm. The ultra-soft tones and gentle lighting create a meditative, tranquil atmosphere. The subject's serene expression and the harmonious, soft palette evoke the feeling of deep peace and emotional balance.",
        category: "Portrait",
        style: "Serene Digital Art",
        colors: ["soft cream", "pale beige", "gentle white", "warm ivory"],
        mood: "Serene and Balanced",
        price: 3
    },
    {
        id: "45",
        filename: "b4362a5b-6991-4458-8914-15a4d2673a9b.jpg",
        title: "Warm Honey",
        description: "A sweet, warm portrait featuring honey-toned colors and golden lighting. The rich, warm palette creates an atmosphere of sweetness and comfort. The subject's gentle expression and the honey-gold tones evoke the natural sweetness of honey and the warmth of golden sunlight.",
        category: "Portrait",
        style: "Warm Tones Art",
        colors: ["honey gold", "warm amber", "golden brown", "cream"],
        mood: "Sweet and Comforting",
        price: 3
    },
    {
        id: "46",
        filename: "b9c95922-a613-4ffc-988d-a83514bfa28d.jpg",
        title: "Fierce Determination",
        description: "A powerful portrait showcasing fierce determination and unwavering resolve. The strong composition and intense expression create an atmosphere of strength and courage. The subject's determined gaze and the bold use of light and shadow convey inner fire and unbreakable spirit.",
        category: "Character Portrait",
        style: "Dynamic Character Art",
        colors: ["warm brown", "deep shadow", "golden", "amber"],
        mood: "Fierce and Determined",
        price: 3
    },
    {
        id: "47",
        filename: "bd83bfdc-dc03-479c-ba08-47b7208fc811.jpg",
        title: "Sunset Blush",
        description: "A beautiful portrait featuring the soft blush of sunset colors. The warm, rosy tones and gentle lighting create a romantic, dreamy atmosphere. The subject's soft expression and the delicate pink and orange hues evoke the tender beauty of a blushing sunset sky.",
        category: "Portrait",
        style: "Romantic Sunset Art",
        colors: ["blush pink", "soft orange", "peach", "cream"],
        mood: "Romantic and Dreamy",
        price: 3
    },
    {
        id: "48",
        filename: "c216fd47-35c9-4b67-ac81-94ef9faebe7b.jpg",
        title: "Mystical Aura",
        description: "An enchanting portrait surrounded by a mystical aura and magical atmosphere. The ethereal lighting and dreamy composition create a sense of otherworldly magic. The subject's mysterious expression and the soft, glowing quality evoke the presence of magical energy and spiritual connection.",
        category: "Fantasy Portrait",
        style: "Mystical Digital Art",
        colors: ["soft purple", "ethereal blue", "golden", "cream"],
        mood: "Mystical and Magical",
        price: 3
    },
    {
        id: "49",
        filename: "c4ef6a30-f650-4c93-80c6-bb95452d4086.jpg",
        title: "Coral Beauty",
        description: "A stunning portrait featuring vibrant coral tones and natural beauty. The warm, coral palette and soft lighting create an atmosphere of tropical warmth and vitality. The subject's radiant expression and the rich coral hues evoke the beautiful colors of coral reefs and tropical sunsets.",
        category: "Portrait",
        style: "Vibrant Portrait Art",
        colors: ["coral", "warm pink", "peach", "golden"],
        mood: "Vibrant and Tropical",
        price: 3
    },
    {
        id: "50",
        filename: "c5c3cabf-7aa1-411b-9757-ab181d9b5723.jpg",
        title: "Gentle Warmth",
        description: "A tender portrait radiating gentle warmth and kindness. The soft, warm tones and delicate lighting create an atmosphere of comfort and care. The subject's kind expression and the harmonious warm palette evoke the feeling of a gentle, warm embrace and emotional safety.",
        category: "Portrait",
        style: "Soft Warm Art",
        colors: ["soft peach", "warm cream", "gentle gold", "pale pink"],
        mood: "Gentle and Caring",
        price: 3
    },
    {
        id: "51",
        filename: "c84b600c-83c1-40fa-97cd-2eb80dd068e4.jpg",
        title: "Natural Elegance",
        description: "A refined portrait showcasing natural elegance and understated beauty. The soft, neutral tones and balanced composition create a sense of timeless sophistication. The subject's elegant expression and the harmonious, natural palette evoke classic beauty and refined grace.",
        category: "Portrait",
        style: "Classic Portrait Art",
        colors: ["soft tan", "cream", "warm beige", "gentle brown"],
        mood: "Elegant and Timeless",
        price: 3
    },
    {
        id: "52",
        filename: "ca7dd7f1-fa05-4008-9fa8-59e7063875a9.jpg",
        title: "Vibrant Spirit",
        description: "An energetic portrait bursting with vibrant colors and lively spirit. The bold, saturated palette and dynamic composition create an atmosphere of energy and vitality. The subject's spirited expression and the rich, vibrant colors evoke joy, enthusiasm, and zest for life.",
        category: "Portrait",
        style: "Vibrant Digital Art",
        colors: ["vibrant pink", "bright coral", "golden", "warm orange"],
        mood: "Energetic and Joyful",
        price: 3
    },
    {
        id: "53",
        filename: "da5d6d06-12d4-4f2b-b6e4-e12a9eebb6e7.jpg",
        title: "Warrior's Pride",
        description: "A noble portrait showcasing a warrior's pride and honor. The strong composition and confident expression create an atmosphere of dignity and strength. The subject's proud bearing and the bold use of light convey courage, honor, and the noble spirit of a true warrior.",
        category: "Character Portrait",
        style: "Heroic Character Art",
        colors: ["warm brown", "golden", "deep shadow", "amber"],
        mood: "Noble and Proud",
        price: 3
    },
    {
        id: "54",
        filename: "dd28db39-af01-4b15-a51a-eeb577efa55c.jpg",
        title: "Floral Fantasy",
        description: "A whimsical portrait immersed in a fantasy of flowers and natural magic. The abundant floral elements and soft, dreamy colors create a fairytale atmosphere. The subject's enchanted expression and the lush, colorful blooms evoke the magic of an enchanted forest filled with eternal spring.",
        category: "Fantasy Portrait",
        style: "Whimsical Fantasy Art",
        colors: ["soft pink", "gentle purple", "green", "cream"],
        mood: "Whimsical and Enchanting",
        price: 3
    },
    {
        id: "55",
        filename: "ddf5a44c-b335-4efb-a8ff-e10cca3ede1f.jpg",
        title: "Steadfast Gaze",
        description: "A powerful portrait featuring an unwavering, steadfast gaze. The strong composition and intense focus create an atmosphere of determination and resolve. The subject's steady expression and the bold use of contrast convey reliability, strength, and unwavering commitment.",
        category: "Character Portrait",
        style: "Strong Character Art",
        colors: ["natural brown", "warm tan", "deep shadow", "golden"],
        mood: "Steadfast and Reliable",
        price: 3
    },
    {
        id: "56",
        filename: "de2ce3be-d839-48bf-96ef-ed55a0c63f6c.jpg",
        title: "Peachy Glow",
        description: "A luminous portrait with a beautiful peachy glow and warm radiance. The soft peach tones and glowing lighting create an atmosphere of warmth and vitality. The subject's glowing expression and the harmonious peachy palette evoke the soft beauty of a summer peach and golden hour warmth.",
        category: "Portrait",
        style: "Glowing Portrait Art",
        colors: ["peach", "soft coral", "golden", "cream"],
        mood: "Glowing and Vital",
        price: 3
    },
    {
        id: "57",
        filename: "dfe4e8ce-4e1e-4a1c-b055-89f9c144e5f8.jpg",
        title: "Soft Elegance",
        description: "A graceful portrait embodying soft elegance and refined beauty. The delicate tones and gentle lighting create an atmosphere of sophistication and grace. The subject's elegant expression and the soft, harmonious palette evoke the timeless beauty of classical elegance and gentle refinement.",
        category: "Portrait",
        style: "Elegant Digital Art",
        colors: ["soft cream", "pale pink", "gentle beige", "warm white"],
        mood: "Elegant and Graceful",
        price: 3
    },
    {
        id: "58",
        filename: "ecdc27cb-42a5-4d6f-9066-23aa6ce9257a.jpg",
        title: "Warm Comfort",
        description: "A cozy portrait radiating warmth and comfort. The rich, warm tones and soft lighting create an atmosphere of safety and emotional warmth. The subject's comforting expression and the warm, inviting palette evoke the feeling of a warm blanket, a cozy home, and emotional security.",
        category: "Portrait",
        style: "Warm Comfort Art",
        colors: ["warm brown", "golden", "soft orange", "cream"],
        mood: "Comforting and Safe",
        price: 3
    },
    {
        id: "59",
        filename: "eea4cf2b-bf4b-4586-9e68-e5fcf0f94402.jpg",
        title: "Sunset Goddess",
        description: "A divine portrait featuring the majestic beauty of a sunset goddess. The rich, warm tones and glowing lighting create an atmosphere of divine radiance and power. The subject's regal expression and the vibrant sunset palette evoke the majesty of celestial beings and the power of the setting sun.",
        category: "Fantasy Portrait",
        style: "Divine Fantasy Art",
        colors: ["vibrant orange", "golden", "warm red", "amber"],
        mood: "Majestic and Divine",
        price: 3
    },
    {
        id: "60",
        filename: "f054e16f-48de-40d6-b3b5-5e4ad85ec748.jpg",
        title: "Brave Heart",
        description: "A courageous portrait showcasing a brave heart and fearless spirit. The strong composition and determined expression create an atmosphere of courage and bravery. The subject's fearless gaze and the bold use of light and shadow convey inner strength, courage, and the heart of a hero.",
        category: "Character Portrait",
        style: "Heroic Portrait Art",
        colors: ["warm brown", "golden", "deep shadow", "amber"],
        mood: "Brave and Courageous",
        price: 3
    },
    {
        id: "61",
        filename: "f4bd57db-df5e-47c5-99c9-aa63dba556f4.jpg",
        title: "Rose Petal Softness",
        description: "A delicate portrait as soft as rose petals. The gentle pink tones and ultra-soft lighting create an atmosphere of tenderness and delicate beauty. The subject's gentle expression and the soft, rosy palette evoke the delicate texture of rose petals and the gentle beauty of blooming flowers.",
        category: "Portrait",
        style: "Soft Floral Art",
        colors: ["soft pink", "rose", "cream", "pale peach"],
        mood: "Delicate and Tender",
        price: 3
    },
    {
        id: "62",
        filename: "ff93f50c-7b20-42cd-975f-1a18ee5a54f0.jpg",
        title: "Noble Spirit",
        description: "A dignified portrait showcasing a noble spirit and honorable character. The refined composition and composed expression create an atmosphere of dignity and nobility. The subject's noble bearing and the balanced use of light convey honor, integrity, and the grace of a noble soul.",
        category: "Character Portrait",
        style: "Noble Portrait Art",
        colors: ["natural brown", "warm tan", "golden", "cream"],
        mood: "Noble and Dignified",
        price: 3
    }
];
