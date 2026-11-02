import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.appName}>عازب</Text>
        <Text style={styles.appNameLatin}>AZIB</Text>
        <Text style={styles.tagline}>نُيسّر الزواج.. ونبني أسرة</Text>
        <View style={styles.divider} />
        <Text style={styles.status}>التطبيق يعمل بنجاح</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07040D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 24,
  },
  appName: {
    fontSize: 40,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  appNameLatin: {
    fontSize: 24,
    fontWeight: '600',
    color: '#7C4DFF',
    marginBottom: 12,
  },
  tagline: {
    fontSize: 16,
    color: '#D9A53A',
    marginBottom: 32,
  },
  divider: {
    width: 48,
    height: 2,
    backgroundColor: '#7C4DFF',
    marginBottom: 32,
  },
  status: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
  },
});
