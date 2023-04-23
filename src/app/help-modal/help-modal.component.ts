import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-help-modal',
  templateUrl: './help-modal.component.html',
  styleUrls: ['./help-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HelpModalComponent implements OnInit {

  constructor(
    // private orderHistoryService: OrderHistoryService,
    // private cartService: CartService,
    // private router: Router,
    private modalController: ModalController) { }

  ngOnInit() { }

  async openHelpModal() {
    const helpModal = await this.modalController.create({
      component: HelpModalComponent
    });
    return await helpModal.present();
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
