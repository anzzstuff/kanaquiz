import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="container footer">
                <div className="col-xs-12">
                    <h4>How to use</h4>
                    <p>Kana refers to the two syllabic writing systems used in Japanese: <a href="http://en.wikipedia.org/wiki/Kana" title="Read more at wikipedia">Hiragana and Katakana</a>.</p>
                    <p>There is no "the right way" to use Kana Quiz.
                    If you are a beginner, you might want to start by choosing the first two groups (a -&gt; ko) of hiragana. Once you manage to pass the last stage, add in one or two more groups. Aim for the perfection - you want to be answering quickly.</p>
                    <p>Have fun!</p>

                    <h4>Updates</h4>
                    <p>
                        <strong>27 March 2017</strong> &middot; Bufix: Allow mobile browsers to change a locked stage number.<br />
                        <strong>24 March 2017</strong> &middot; Enhancement: Improved mobile browser usability with reduced margins.<br />
                        <strong>18 March 2017</strong> &middot; Bugfix: Fixed unintended behavior when same group was selected from both hiragana &amp; katakana. Thanks for the bug report!
                    </p>
                    <p>Coders needed! This app is open source, but I'm currently the only one working on it. If you'd like to practice your React.js skills,
                        feel free to check the issues and fork it on <a href="https://github.com/anzzstuff/kanaquiz">GitHub</a>!</p>
                    <p>
                        <strong>14 Aug 2016</strong> &middot; Launch: Here we are finally with a new version of Kana Quiz.
                        This app doesn't require flash anymore, and should work great with mobile phones and tablets.
                        Note that this is still a beta version, so there may be a few quirks. I would love to hear
                        your thoughts, so if you'd like, be sure to shoot me some <a href="https://goo.gl/forms/BwtgpkYjT1iyH8uE3">feedback</a>! {' '}
                        If you for some reason want to use the old version, it's still available <a href="http://simplemedia.org/kana/flash/" rel="nofollow">here</a>.
                    </p>
                    <div className="copyright">&copy; <a href="http://simplemedia.org/">Antti Pilto</a> 2016</div>
                </div>
            </div>
        )
    }
}

export default Footer;