import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="container footer">
                <div className="col-xs-12">
                    <h4>New version!</h4>
                    <p>
                        Here we are finally with a new version of Kana Quiz.
                        This app doesn't require flash anymore, and should work great with mobile phones and tablets.
                        Note that this is still a beta version, so there may be a few quirks. I would love to hear
                        your thoughts, so if you'd like, be sure to shoot me some feedback using {' '}
                        <a href="https://goo.gl/forms/BwtgpkYjT1iyH8uE3">this form</a>! {' '}
                        If you for some reason want to use the old version, it's still available <a href="http://simplemedia.org/kana/flash/">here</a>.
                    </p>

                    <h4>How to use</h4>
                    <p>Kana refers to the two syllabic writing systems used in Japanese: <a href="http://en.wikipedia.org/wiki/Kana" title="Read more at wikipedia">Hiragana and Katakana</a>.</p>
                    <p>There is no "the right way" to use Kana Quiz.
                    If you are a beginner, you might want to start by choosing the first two groups (a -&gt; ko) of hiragana. Once you manage to pass the last stage, add in one or two more groups. Aim for the perfection - you want to be answering quickly. To learn the characters in the beginning just enter false answers and it'll tell you what the correct answer was.</p>
                    <p>Have fun!</p>
                    <div className="copyright">&copy; <a href="http://simplemedia.org/">Antti Pilto</a> 2016</div>
                </div>
            </div>
        )
    }
}

export default Footer;