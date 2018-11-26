/**
 * @const {string} TMPL_ICO
 * @const {string} TMPL_LINK
 */
const
    TMPL_LINK = '<div class="wd-pretty-hint">' +
                    '<span class="wd-pretty-hint__icon">{{ icon }}</span>' +
                    '<span class="wd-pretty-hint__text">{{ text }}</span>' +
                '</div>';

const
    TYPES = {
        INFO: '<svg ' +
                  'class="wd-ico" ' +
                  'preserveAspectRatio="xMidYMid meet" ' +
                  'height="1em" width="1em" ' +
                  'fill="currentColor" ' +
                  'viewBox="0 0 24 24" ' +
                  'xmlns="http://www.w3.org/2000/svg" ' +
                  'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
                  'stroke="none" ' +
                  'style="color:{{ color }}" ' +
              '><g>' +
                  '<path d="M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11" fill-rule="evenodd"></path>' +
              '</g></svg>',
        WARN: 'warn',
        FAILURE: 'failure',
        SUCCESS: 'success'
    };

const
    DEFAULT_COLOR = 'rgb(230, 236, 241)';

/**
 * @function {prettylink}
 *
 * @param {object} block
 */
function prettyhint(block) {
    var
        out = block.body;



    return out;
}



module.exports = {
    book: {
        assets: './assets',
        js: [],
        css: ['pretty-hint.css?cacheBreaker=1']
    },
    blocks: {prettyhint}
};
