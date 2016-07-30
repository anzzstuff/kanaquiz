/* export let kanaDictionary_romajifirst = {
    'hiragana' : {
        'h_group1': { characters: { 'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お' } },
        'h_group2': { characters: { 'ka': 'か', 'ki': 'き', 'ku': 'く', 'ke': 'け', 'ko': 'こ' } },
        'h_group3': { characters: { 'sa': 'さ', 'shi': 'し', 'su': 'す', 'se': 'せ', 'so': 'そ' } },
        'h_group4': { characters: { 'ta': 'た', 'chi': 'ち', 'tsu': 'つ', 'te': 'て' , 'to': 'と' } },
        'h_group5': { characters: { 'na': 'な', 'ni': 'に', 'nu': 'ぬ', 'ne': 'ね', 'no': 'の' } },
        'h_group6': { characters: { 'ha': 'は', 'hi': 'ひ', 'fu': 'ふ', 'he': 'へ', 'ho': 'ほ' } },
        'h_group7': { characters: { 'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も' } },
        'h_group8': { characters: { 'ya': 'や', 'yu': 'ゆ', 'yo': 'よ' } },
        'h_group9': { characters: { 'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ' } },
        'h_group10': { characters: { 'wa': 'わ', 'wo': 'を', 'n': 'ん' } },
    },
    'katakana' : {
    }
}; */

export let kanaDictionary = {
    'hiragana' : {
        'h_group1': { characters: { 'あ': ['a'], 'い': ['i'], 'う': ['u'], 'え': ['e'], 'お': ['o'] } },
        'h_group2': { characters: { 'か': ['ka'], 'き': ['ki'], 'く': ['ku'], 'け': ['ke'], 'こ': ['ko'] } },
        'h_group3': { characters: { 'さ': ['sa'], 'し': ['shi','si'], 'す': ['su'], 'せ': ['se'], 'そ': ['so'] } },
        'h_group4': { characters: { 'た': ['ta'], 'ち': ['chi','ti'], 'つ': ['tsu','tu'], 'て': ['te'], 'と': ['to'] } },
        'h_group5': { characters: { 'な': ['na'], 'に': ['ni'], 'ぬ': ['nu'], 'ね': ['ne'], 'の': ['no'] } },
        'h_group6': { characters: { 'は': ['ha'], 'ひ': ['hi'], 'ふ': ['fu','hu'], 'へ': ['he'], 'ほ': ['ho'] } },
        'h_group7': { characters: { 'ま': ['ma'], 'み': ['mi'], 'む': ['mu'], 'め': ['me'], 'も': ['mo'] } },
        'h_group8': { characters: { 'や': ['ya'], 'ゆ': ['yu'], 'よ': ['yo'] } },
        'h_group9': { characters: { 'ら': ['ra'], 'り': ['ri'], 'る': ['ru'], 'れ': ['re'], 'ろ': ['ro'] } },
        'h_group10': { characters: { 'わ': ['wa'], 'を': ['wo','o'], 'ん': ['n'] } },
        'h_group11': { characters: { 'が': ['ga'], 'ぎ': ['gi'], 'ぐ': ['gu'], 'げ': ['ge'], 'ご': ['go'], 'ざ': ['za'], 'じ': ['ji','zi'], 'ず': ['zu','du'], 'ぜ': ['ze'], 'ぞ': ['zo'], 'だ': ['da'], 'ぢ': ['ji','di','dzi'], 'づ': ['zu','dzu'], 'で': ['de'], 'ど': ['do'], 'ば': ['ba'], 'び': ['bi'], 'ぶ': ['bu'], 'べ': ['be'], 'ぼ': ['bo'], 'ぱ': ['pa'], 'ぴ': ['pi'], 
        'ぷ': ['pu'], 'ぺ': ['pe'], 'ぽ': ['po'], 'きゃ': ['kya'], 'きゅ': ['kyu'], 'きょ': ['kyo'], 'しゃ': ['sha','sya'], 'しゅ': ['shu','syu'], 'しょ': ['sho','syo'], 'ちゃ': ['cha','cya'], 'ちゅ': ['chu','cyu'], 'ちょ': ['cho','cyo'], 'にゃ': ['nya'], 'にゅ': ['nyu'], 'にょ': ['nyo'], 'ひゃ': ['hya'], 'ひゅ': ['hyu'], 'ひょ': ['hyo'], 'みゃ': ['mya'], 'みゅ': ['myu'], 'みょ': ['myo'], 'りゃ': ['rya'], 'りゅ': ['ryu'], 'りょ': ['ryo'], 'ぎゃ': ['gya'], 'ぎゅ': ['gyu'], 'ぎょ': ['gyo'], 'じゃ': ['ja','jya'], 'じゅ': ['ju','jyu'], 'じょ': ['jo','jyo'], 'びゃ': ['bya'], 'びゅ': ['byu'], 'びょ': ['byo'], 'ぴゃ': ['pya'], 'ぴゅ': ['pyu'], 'ぴょ': ['pyo'] } }
    },
    'katakana' : {
        'k_group1': { characters: { 'ア': ['a'], 'イ': ['i'], 'ウ': ['u'], 'エ': ['e'], 'オ': ['o'] } },
        'k_group2': { characters: { 'カ': ['ka'], 'キ': ['ki'], 'ク': ['ku'], 'ケ': ['ke'], 'コ': ['ko'] } },
        'k_group3': { characters: { 'サ': ['sa'], 'シ': ['shi','si'], 'ス': ['su'], 'セ': ['se'], 'ソ': ['so'] } },
        'k_group4': { characters: { 'タ': ['ta'], 'チ': ['chi','ti'], 'ツ': ['tsu','tu'], 'テ': ['te'], 'ト': ['to'] } },
        'k_group5': { characters: { 'ナ': ['na'], 'ニ': ['ni'], 'ヌ': ['nu'], 'ネ': ['ne'], 'ノ': ['no'] } },
        'k_group6': { characters: { 'ハ': ['ha'], 'ヒ': ['hi'], 'フ': ['fu','hu'], 'ヘ': ['he'], 'ホ': ['ho'] } },
        'k_group7': { characters: { 'マ': ['ma'], 'ミ': ['mi'], 'ム': ['mu'], 'メ': ['me'], 'モ': ['mo'] } },
        'k_group8': { characters: { 'ヤ': ['ya'], 'ユ': ['yu'], 'ヨ': ['yo'] } },
        'k_group9': { characters: { 'ラ': ['ra'], 'リ': ['ri'], 'ル': ['ru'], 'レ': ['re'], 'ロ': ['ro'] } },
        'k_group10': { characters: { 'ワ': ['wa'], 'ヲ': ['wo','o'], 'ン': ['n'] } },
        'k_group11': { characters: { 'ガ': ['ga'], 'ギ': ['gi'], 'グ': ['gu'], 'ゲ': ['ge'], 'ゴ': ['go'], 'ザ': ['za'], 'ジ': ['ji','zi'], 'ズ': ['zu','du'], 'ゼ': ['ze'], 'ゾ': ['zo'], 'ダ': ['da'], 'ヂ': ['ji','di','dzi'], 'ヅ': ['zu','dzu'], 'デ': ['de'], 'ド': ['do'], 'バ': ['ba'], 'ビ': ['bi'], 'ブ': ['bu'], 'ベ': ['be'], 'ボ': ['bo'], 'パ': ['pa'], 'ピ': ['pi'], 
        'プ': ['pu'], 'ペ': ['pe'], 'ポ': ['po'], 'キャ': ['kya'], 'キュ': ['kyu'], 'キョ': ['kyo'], 'シャ': ['sha','sya'], 'シュ': ['shu','syu'], 'ショ': ['sho','syo'], 'チャ': ['cha','cya'], 'チュ': ['chu','cyu'], 'チョ': ['cho','cyo'], 'ニャ': ['nya'], 'ニュ': ['nyu'], 'ニョ': ['nyo'], 'ヒャ': ['hya'], 'ヒュ': ['hyu'], 'ヒョ': ['hyo'], 'ミャ': ['mya'], 'ミュ': ['myu'], 'ミョ': ['myo'], 'リャ': ['rya'], 'リュ': ['ryu'], 'リョ': ['ryo'], 'ギャ': ['gya'], 'ギュ': ['gyu'], 'ギョ': ['gyo'], 'ジャ': ['ja','jya'], 'ジュ': ['ju','jyu'], 'ジョ': ['jo','jyo'], 'ビャ': ['bya'], 'ビュ': ['byu'], 'ビョ': ['byo'], 'ピャ': ['pya'], 'ピュ': ['pyu'], 'ピョ': ['pyo'] } }
    }
};

// If answer is wrong, let's check if the answer is a key here, and compare the value to the correct answer
// export let acceptedAlternatives = { 'si': 'shi', 'ti': 'chi', 'tu': 'tsu', 'hu': 'fu', 'o': 'wo',
                                    // 'zi': 'ji', 'di': 'ji', 'du': 'zu', 'sya': 'sha', 'syu': 'shu', 'syo': 'sho',
                                    // 'cya': 'cha', 'cyu': 'chu', 'cyo': 'cho', 'jya': 'ja', 'jyu': 'ju', 'jyo': 'jo' };



// export let acceptedAlternatives = { 'shi': 'si', 'chi': 'ti', 'tsu': 'tu', 'fu': 'hu', 'wo': 'o',
//                                     'ji': 'zi', 'ji':  };

/*
let kanaArray = [
        'あ','い','う','え','お',
        'か','き','く','け','こ',
        'さ','し','す','せ','そ',
        'た','ち','つ','て','と',
        'な','に','ぬ','ね','の',
        'は','ひ','ふ','へ','ほ',
        'ま','み','む','め','も',
        'や','ゆ','よ',
        'ら','り','る','れ','ろ',
        'わ','を','ん'
];
let romajiArray = [
        'a','i','u','e','o',
        'ka','ki','ku','ke','ko',
        'sa','shi','su','se','so',
        'ta','chi','tsu','te','to',
        'na','ni','nu','ne','no',
        'ha','hi','fu','he','ho',
        'ma','mi','mu','me','mo',
        'ya','yu','yo',
        'ra','ri','ru','re','ro',
        'wa','wo','n'
];
*/
