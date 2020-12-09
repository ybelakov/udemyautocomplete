<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ybelakov/udemyautocomplete">
    <img src="chrome extension/icon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Udemy Autocomplete Q&A Chrome Extension</h3>

  <p align="center">
    Type faster in the Q&A section of Udemy using this Google Chrome Extension.
    <br />
    <a href="#usage"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
The project was inspired by the monotonous posting in the Udemy Q&A section using a template-like answers. The same words or even phrases are being typed thousands of times    without automation. Solutions like Windows Clipboard History are slow and not effective.

<img src="/images/screenshot.png" alt="Udemy Autocomplete Screen Shot" style="max-width:100%;">


Here's why should use this extension:
* Your time should be focused on the actual answering and not on typing complex words or mandatory etiquette.
* Typing the same words or phrases might be annoying which is bad for your health. This extension cares about your health.
* Motivate me to develop the extension furthermore.

Of course, this project might not be helpful at all since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have have contributed to expanding this template!

The dictionary in this version will be helpful only in the Data Science sphere. However, in the next version, the users will be able to import their own dictionaries.


<img src="/images/Screenshot_1.png" alt="Udemy Autocomplete Screen Shot" style="max-width:100%;">

### Built With
* [JavaScript](https://www.javascript.com/)
* [jQuery UI](https://jqueryui.com/)
* [JQuery](https://jquery.com)




<!-- GETTING STARTED -->
## Getting Started

Please note that this project is submitted for reviewing at the Google Chrome Store and once it gets (hopefully it will) listed, the installation will be as simple as a click.
Until then, please follow the installation process below.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ybelakov/udemyautocomplete.git
   ```
2. Open `Google Chrome` and go to 
   ```
   chrome://extensions/
   ```
3. In the upper right corner you will see `Developer mode`. Make sure you turn it on.

3. In the upper left corner three buttons will appear. Click on `Load unpacked`
4. Open the cloned git repository on your PC and select the `chrome extension` folder.
  



<!-- USAGE EXAMPLES -->
## Usage
* Autocomplete is activated when a minimum of two symbols of the word/phrase are typed.
* Moving through suggestions is done by using the `down key arrow`.
* Selecting the suggestion is done by the `Tab` key.
* <b>N.B. Using the `Enter` key for selecting a suggestion won't work as it inputs a new line at the same time.</b>
* If you would like to hide the Autocomplete UI, press `escape`.


Cons/Bugs:
* Words/phrases are split by a `whitespace`. Therefore, when you would you like to enter a newline, please leave one `whitespace` at the line above in order to get the autocomplete activated in the beginning of the new line. Otherwise, it will be active again after the first `whitespace` is typed.
* Autocomplete works only at the end of the input. It won't work between words/phrases.
* With this version, the `Double Pane View` in the Q&A section is a lot more reliable. Switching between the view modes will probably require an extension reload. This is done by clicking the extension icon in the extension bar, followed by clicking the green `Reload Extension` button. Use this button whenever the Autocomplete UI is not showing.


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/ybelakov/udemyautocomplete/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
