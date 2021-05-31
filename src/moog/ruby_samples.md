```ruby
#!|RecordingSample
channels = [
    "Channel1.Active cmd",
]

options = %q(
<Options PeakValleySampling='f'
         PeakValleyThreshold='0.2'
         PeakValleyWindow='2'
         ApexThreshold='2'
         RememberLastSeconds='0'
         ResamplingMethod='Linear Interpolation'
         UseControllerFreq='t'
         Duration='1.5' />
)

ok = SetupRecording('ST1', "RecData.fstrm", 20, channels, options)
if(!ok)
    puts("Failed to setup recording")
end

if(!StartRecording(1))
    puts("Failed to start recording")
else
    puts("Started recording")
end

sleep(2)
```