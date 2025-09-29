import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './LandingRedirectWebpartWebPart.module.scss';
import * as strings from 'LandingRedirectWebpartWebPartStrings';

export interface ILandingRedirectWebpartWebPartProps {
  description: string;
}

export default class LandingRedirectWebpartWebPart extends BaseClientSideWebPart<ILandingRedirectWebpartWebPartProps> {

  public render(): void {
    let redirectionCancelled = false;

    function performRedirection() {
        location.pathname = '/sites/Attorney';
        console.log('perform redirect ');
    }

    const delayedRedirection = () => 
      setTimeout(() => {
        if (redirectionCancelled) return console.log('redir canceled');
        performRedirection();
      }, 333 * 4);

    window.onkeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') redirectionCancelled = true;
    };
    window.onkeyup = (e: KeyboardEvent) => {
      if (e.key === 'Escape') redirectionCancelled = true;
    };

    // if (location.pathname.toLowerCase().indexOf('/sites/pd-internal') === 0)
      delayedRedirection();
    // else console.log('landing-redirect-webpart: no redirection (not on /sites/PD-Internal)');

    this.domElement.innerHTML = `
      <div class="${ styles.landingRedirectWebpart }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Redirecting to: /sites/&lt;role&gt;</span>
              <p class="${ styles.subTitle }">A role-based redirection.</p>
              <p class="${ styles.description }">${escape(this.properties.description)} (description).</p>
              <a href="/" class="${ styles.button }"><span class="${ styles.label }">Redirect Now</span></a>
              <a href="#" class="${ styles.button }"><span class="${ styles.label }">Stay Here</span></a>
            </div>
          </div>
        </div>
      </div>
      `;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
