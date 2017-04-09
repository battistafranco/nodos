export interface Node {   
    id: number;
	eeprom_size: number;
	im_master: boolean;
	identified: boolean;
	initapp: number;
    status : number;
    ram_read :number;
    ram_write :number;
    lan_dir :number;
    enabled_read_eeprom :boolean;
    buffer :number;
    enabled_read_node :boolean;
    time : string;
    fnapp : number;
    servicios : any;
    enabled_read_ram :boolean;
    show: boolean;
}