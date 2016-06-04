//
//  ViewController.m
//  smartRemote
//
//  Created by Soul on 04/06/2016.
//  Copyright © 2016 Soul. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    // Initialize UUID
    NSUUID *uuid = [[NSUUID alloc] initWithUUIDString:@"23A01AF0-232A-4518-9C0E-323FB773F5EF"];
    SBKBeaconID *beaconID = [SBKBeaconID beaconIDWithProximityUUID:uuid];
    
    
    // Request Location/Bluetooth permission
    [[SBKBeaconManager sharedInstance] requestAlwaysAuthorization];
    [self checkLocationServices];
    [self checkBluetoothServices];
    
    [SBKBeaconManager sharedInstance].delegate = self;
    
    // Start ccanning
    [[SBKBeaconManager sharedInstance] startRangingBeaconsWithID:beaconID
                                               wakeUpApplication:NO];
    
    NSLog(@"view did load");
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)beaconManager:(SBKBeaconManager *)beaconManager didRangeBeacons:(NSArray *)beacons inRegion:(SBKBeaconID *)region{
    //NSLog(@"beacon detected : %@", beacons);
}

- (void)beaconManager:(SBKBeaconManager *)beaconManager didRangeNewBeacon:(SBKBeacon *)beacon{
    //NSLog(@"new beacon detected : %@", beacon);
}

- (void)beaconManager:(SBKBeaconManager *)beaconManager scanDidFinishWithBeacons:(NSArray *)beacons{
    NSLog(@"scan did finish with beacon %@", beacons);
    
    for (SBKBeacon *beacon in beacons)
    {
        NSLog(@"details of beacon -----");
        
        NSLog(@"serial number : %@", beacon.serialNumber);
        
        //bigger is nearer (signal strength)
        NSLog(@"RSSI : %ld", (long)beacon.rssi);
        
        //smaller is nearer (accuracy/distance)
        NSLog(@"Accuracy/Distance : %f", beacon.accuracy);
    }
    
}

-(BOOL)checkLocationServices
{
    if (!self.locationManager) {
        self.locationManager = [[CLLocationManager alloc] init];
        self.locationManager.desiredAccuracy=kCLLocationAccuracyBest;
        self.locationManager.distanceFilter=100.0f;
    }
    
    BOOL enable=[CLLocationManager locationServicesEnabled];// check if location services enabled
    
    int status=[CLLocationManager authorizationStatus];//check if authorized for location
    
    if(!enable || status<3){
        if([self.locationManager respondsToSelector:@selector(requestAlwaysAuthorization)]){
            [self.locationManager requestAlwaysAuthorization];//request permission
        }
        return NO;
        
    }
    return YES;
}

-(BOOL)checkBluetoothServices
{
    if (!self.CM) {
        self.CM = [[CBCentralManager alloc]initWithDelegate:self queue:nil];
    }
    if (self.CM.state == CBCentralManagerStatePoweredOff) {
        return NO;
    }
    else if(self.CM.state == CBCentralManagerStatePoweredOn){
        return YES;
    }
    return YES;
}

- (void)centralManagerDidUpdateState:(CBCentralManager *)central{
    NSLog(@"bluetooth state updated");
}


@end
