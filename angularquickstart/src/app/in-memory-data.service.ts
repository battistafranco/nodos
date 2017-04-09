import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  let nodes = [
            {  
                "id": 1,         
        "eeprom_size" : 128,
        "im_master" : true,
        "identified" : true,
        "initapp" : 101,
        "status": 1,
        "ram_read": 1024,
        "ram_write" : 1024,
        "lan_dir" : 1,
        "enabled_read_eeprom"  : true,
        "buffer" : 1,
        "enabled_read_node"  : true,
        "time" : "1490740101.2242255",
        "fnapp" : 1,
        "servicios": "NO",
        "enabled_read_ram"  : true, 
		"show": true,
            },
            {   
                "id": 2,     
        "eeprom_size" : 128,
        "im_master" : false,
        "identified" : true,
        "initapp" : 101,
        "status": 0,
        "ram_read": 1,
        "ram_write" : 101,
        "lan_dir" : 2,
        "enabled_read_eeprom"  : true,
        "buffer" : 1,
        "enabled_read_node"  : true,
        "time" : "1490740101.2242255",
        "fnapp" : 1,
        "servicios": "NO",
        "enabled_read_ram"  : true, 
		"show": true,
            }
			,
            {     
                "id": 3,   
        "eeprom_size" : 128,
        "im_master" : false,
        "identified" : true,
        "initapp" : 101,
        "status": 0,
        "ram_read": 1,
        "ram_write" : 101,
        "lan_dir" : 3,
        "enabled_read_eeprom"  : true,
        "buffer" : 1,
        "enabled_read_node"  : true,
        "time" : "1490740101.2242255",
        "fnapp" : 1,
        "servicios": "NO",
        "enabled_read_ram"  : true, 
		"show": true,
            }
			,
            {   
                "id": 4,     
        "eeprom_size" : 128,
        "im_master" : false,
        "identified" : true,
        "initapp" : 101,
        "status": 1,
        "ram_read": 1,
        "ram_write" : 101,
        "lan_dir" : 4,
        "enabled_read_eeprom"  : true,
        "buffer" : 1,
        "enabled_read_node"  : true,
        "time" : "1490740101.2242255",
        "fnapp" : 1,
        "servicios": "NO",
        "enabled_read_ram"  : true, 
		"show": true,
            }
			,
            { 
                "id": 5,       
        "eeprom_size" : 128,
        "im_master" : false,
        "identified" : true,
        "initapp" : 101,
        "status": 1,
        "ram_read": 1,
        "ram_write" : 101,
        "lan_dir" : 5,
        "enabled_read_eeprom"  : true,
        "buffer" : 1,
        "enabled_read_node"  : true,
        "time" : "1490740101.2242255",
        "fnapp" : 1,
        "servicios": "NO",
        "enabled_read_ram"  : true, 
		"show": true,
            }
			,
            {  
                "id": 6,      
        "eeprom_size" : 128,
        "im_master" : false,
        "identified" : true,
        "initapp" : 101,
        "status": 0,
        "ram_read": 1,
        "ram_write" : 101,
        "lan_dir" : 6,
        "enabled_read_eeprom"  : true,
        "buffer" : 1,
        "enabled_read_node"  : true,
        "time" : "1490740101.2242255",
        "fnapp" : 1,
        "servicios": "NO",
        "enabled_read_ram"  : true, 
		"show": false,
            }
			,
            {  
                "id": 7,      
        "eeprom_size" : 128,
        "im_master" : false,
        "identified" : true,
        "initapp" : 101,
        "status": 0,
        "ram_read": 1,
        "ram_write" : 101,
        "lan_dir" : 7,
        "enabled_read_eeprom"  : true,
        "buffer" : 1,
        "enabled_read_node"  : true,
        "time" : "1490740101.2242255",
        "fnapp" : 1,
        "servicios": "NO",
        "enabled_read_ram"  : true, 
		"show": false,
            }
			,
            { 
                "id": 8,       
        "eeprom_size" : 128,
        "im_master" : false,
        "identified" : true,
        "initapp" : 101,
        "status": 1,
        "ram_read": 1,
        "ram_write" : 101,
        "lan_dir" : 8,
        "enabled_read_eeprom"  : true,
        "buffer" : 1,
        "enabled_read_node"  : true,
        "time" : "1490740101.2242255",
        "fnapp" : 1,
        "servicios": "NO",
        "enabled_read_ram"  : true, 
		"show": false,
            }
			,
            {
                "id": 9,        
        "eeprom_size" : 128,
        "im_master" : false,
        "identified" : true,
        "initapp" : 101,
        "status": 0,
        "ram_read": 1,
        "ram_write" : 101,
        "lan_dir" : 9,
        "enabled_read_eeprom"  : true,
        "buffer" : 1,
        "enabled_read_node"  : true,
        "time" : "1490740101.2242255",
        "fnapp" : 1,
        "servicios": "NO",
        "enabled_read_ram"  : true, 
		"show": false,
            }
			,
            {   
                "id": 10,     
        "eeprom_size" : 128,
        "im_master" : false,
        "identified" : true,
        "initapp" : 101,
        "status": 0,
        "ram_read": 1,
        "ram_write" : 101,
        "lan_dir" : 10,
        "enabled_read_eeprom"  : true,
        "buffer" : 1,
        "enabled_read_node"  : true,
        "time" : "1490740101.2242255",
        "fnapp" : 1,
        "servicios": "NO",
        "enabled_read_ram"  : true,
		"show": false, 
            }
			,
            {    
                "id": 11,    
        "eeprom_size" : 128,
        "im_master" : false,
        "identified" : true,
        "initapp" : 101,
        "status": 0,
        "ram_read": 1,
        "ram_write" : 101,
        "lan_dir" : 11,
        "enabled_read_eeprom"  : true,
        "buffer" : 1,
        "enabled_read_node"  : true,
        "time" : "1490740101.2242255",
        "fnapp" : 1,
        "servicios": "NO",
        "enabled_read_ram"  : true, 
		"show": false,
            }
			,
            {     
                "id": 12,   
        "eeprom_size" : 128,
        "im_master" : false,
        "identified" : true,
        "initapp" : 101,
        "status": 0,
        "ram_read": 1,
        "ram_write" : 101,
        "lan_dir" : 12,
        "enabled_read_eeprom"  : true,
        "buffer" : 1,
        "enabled_read_node"  : true,
        "time" : "1490740101.2242255",
        "fnapp" : 12,
        "servicios": "NO",
        "enabled_read_ram"  : true, 
		"show": false,
            }
			,
            { 
                "id": 13,       
        "eeprom_size" : 128,
        "im_master" : false,
        "identified" : true,
        "initapp" : 101,
        "status": 0,
        "ram_read": 1,
        "ram_write" : 101,
        "lan_dir" : 13,
        "enabled_read_eeprom"  : true,
        "buffer" : 1,
        "enabled_read_node"  : true,
        "time" : "1490740101.2242255",
        "fnapp" : 1,
        "servicios": "NO",
        "enabled_read_ram"  : true, 
		"show": false,
            }
			,
            {    
                "id": 14,    
        "eeprom_size" : 128,
        "im_master" : false,
        "identified" : true,
        "initapp" : 101,
        "status": 0,
        "ram_read": 1,
        "ram_write" : 101,
        "lan_dir" : 14,
        "enabled_read_eeprom"  : true,
        "buffer" : 1,
        "enabled_read_node"  : true,
        "time" : "1490740101.2242255",
        "fnapp" : 1,
        "servicios": "NO",
        "enabled_read_ram"  : true, 
		"show": false,
            }
    ];
    return {nodes};
  }
}
