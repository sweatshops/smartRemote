//
//  ViewController.h
//  smartRemote
//
//  Created by Soul on 04/06/2016.
//  Copyright © 2016 Soul. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <CoreLocation/CoreLocation.h>
#import "SBKBeacon.h"
#import "SBKBeaconManager.h"
#import "SBKBeaconManager+Cloud.h"


@interface ViewController : UIViewController <SBKBeaconManagerDelegate, CLLocationManagerDelegate, CBCentralManagerDelegate>

@property(strong, atomic) CLLocationManager *locationManager;
@property(strong, atomic) CBCentralManager  *CM;

@end

